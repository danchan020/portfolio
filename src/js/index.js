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

window.onpopstate = handleLocation()
window.route = route

handleLocation()

// nav bar 

// scroll 
