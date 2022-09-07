// message

const message = document.querySelector("#message")

const handleMessageCount = () => {
    let msg = document.getElementById("message").value;
    let msgCount = document.getElementById("message-count")
    let msgLength = msg.length;
    const maxLength = 1000;
    let charLeft = maxLength - msgLength;
    msgCount.innerText = charLeft;
}

message.addEventListener("input", handleMessageCount)