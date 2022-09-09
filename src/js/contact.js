// form input

const inputs = document.querySelectorAll(".form-input");

inputs.forEach((input) => {
    input.addEventListener("focus", (event) => {
      const parent = event.target.parentElement;
      parent.classList.add("focused");
    });
  });
  
  inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
      const parent = event.target.parentElement;
      if (!event.target.value) {
        parent.classList.remove("focused");
      }
    });
  });

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