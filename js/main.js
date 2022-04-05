/* global document window */

// Toggle My Menu bar 
document.querySelector(".fa-bars").onclick = function () {
    document.querySelector("nav").classList.toggle("toggle-menu")
}

window.onscroll = function () {

    // Show The Arrow-up If Window scrollY Is >= 700 
    if (window.scrollY >= 400) {

        document.querySelector(".fa-arrow-up").style.display = "block"

    } else {
        document.querySelector(".fa-arrow-up").style.display = "none"
    }
}

document.querySelector(".fa-arrow-up").onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


document.querySelectorAll("nav a").forEach(function (e) {

    e.onclick = function () {
        document.querySelector("nav").classList.remove("toggle-menu")
    }
})
