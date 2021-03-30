"use strict"

let es900p = window.matchMedia("(max-width: 900px)")
const background_image = document.querySelector(".background_image")

if (es900p.matches){
    background_image.src = "./images/background_tablet.png";
}