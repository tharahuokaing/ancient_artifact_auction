function placeBid(buttonElement) {
    // 1. Find the parent auction card container for the clicked button
    const card = buttonElement.closest('.auction-card');
    
    // 2. Select the specific elements inside this card using classes
    const bidInput = card.querySelector('.bid-input');
    const currentBidElement = card.querySelector('.current-bid');
    const messageElement = card.querySelector('.message');
    
    // 3. Get values and convert current bid text (removing the '$' sign) to a float number
    const currentBidValue = parseFloat(currentBidElement.textContent.replace('$', ''));
    const userBidValue = parseFloat(bidInput.value);
    
    // 4. Validate the user input
    if (isNaN(userBidValue) || userBidValue <= 0) {
        messageElement.style.color = "red";
        messageElement.textContent = "Please enter a valid bid amount.";
        return;
    }
    
    // 5. Check if the new bid is higher than the current bid
    if (userBidValue > currentBidValue) {
        currentBidElement.textContent = "$" + userBidValue.toFixed(2);
        messageElement.style.color = "green";
        messageElement.textContent = "Bid placed successfully!!!";
        bidInput.value = ""; // Clear input box
    } else {
        messageElement.style.color = "red";
        messageElement.textContent = "Your bid must be higher than the current bid.";
    }
}
