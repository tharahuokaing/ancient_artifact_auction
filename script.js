let currentBid = 100;

function placeBid() {

    const bidInput = document.getElementById("bidInput");
    const message = document.getElementById("message");
    const currentBidText = document.getElementById("currentBid");

    let newBid = parseFloat(bidInput.value);

    if (isNaN(newBid)) {
        message.style.color = "red";
        message.innerHTML = "សូមបញ្ចូលតម្លៃ!";
        return;
    }

    if (newBid > currentBid) {
        currentBid = newBid;

        currentBidText.innerHTML = "$" + currentBid;

        message.style.color = "green";
        message.innerHTML = "ដេញថ្លៃជោគជ័យ!";
    } else {
        message.style.color = "red";
        message.innerHTML = "តម្លៃត្រូវធំជាងតម្លៃបច្ចុប្បន្ន!";
    }

    bidInput.value = "";
}
