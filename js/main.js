/* global document window */

// Toggle My Menu bar 
document.querySelector(".fa-bars").onclick = function () {
    document.querySelector("nav").classList.toggle("toggle-menu")
}

document.querySelector("header .search-box form button").onclick = function () {

    if(document.querySelector('.loc-input input').value == ""){
        
        document.querySelector('.loc-input input').focus();
        return false
        
    }else{
         return true
    }
}

window.onscroll = function () {

    // Show The Arrow-up If Window scrollY Is >= 700 
    if (window.scrollY >= 400) {

        document.querySelector("nav .fa-arrow-up").style.display = "block"

    } else {
        document.querySelector("nav .fa-arrow-up").style.display = "none"
    }
}

document.querySelector("nav .fa-arrow-up").onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

document.querySelectorAll("nav ul a").forEach(function (e) {

    e.onclick = function () {
        document.querySelector("nav").classList.remove("toggle-menu")
    }
})
