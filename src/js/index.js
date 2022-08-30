// router

const route = (event) => {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    handleLocation()
}

const routes = {
    404: "/404.html",
    "/": "/landing.html",
    "projects": "/projects.html",
    "blogs": "/blogs.html",
    "contact" : "/contact.html",
}

const handleLocation = async () => {
    const path = window.location.pathname
    const route = routes[path] || routes[404]
    const html = await fetch(route).then((data) => data.text())
    document.getElementById("main-nav").innerHTML = html
}

window.onpopstate = handleLocation
window.route = route

handleLocation()

// scroll 

const scrollButton = document.querySelector(".scroll-button");
const main = document.querySelector("main");
const topOfMain = main.getBoundingClientRect().top;

scrollButton.addEventListener("click", function () {
    window.scroll({ top: topOfMain, behavior: "smooth" });
})

// message

const message = document.querySelector("#message")
console.log(message)

const handleMessageCount = () => {
    var msg = document.getElementById("message").value;
    var msgCount = document.getElementById("message-count")
    var msgLength = msg.length;
    const maxLength = 1000;
    var charLeft = maxLength - msgLength;
    msgCount.innerText = charLeft;
  }

message.addEventListener("input", handleMessageCount)
