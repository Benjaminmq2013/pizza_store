"use strict"

// Media Query 900px
let es900p = window.matchMedia("(max-width: 900px)")
const background_image = document.querySelector(".background_image")

if (es900p.matches){
    background_image.src = "./images/background_tablet.png";
}


// Media Query 767px
let es767 = window.matchMedia("(max-width:767px)");

if (es767.matches){
    background_image.src = "./images/background_mobile.png"
}

