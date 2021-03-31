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

const bodyCollection = document.getElementsByTagName("body")
const body = bodyCollection[0];
let bodyHeight = body.scrollHeight;

window.addEventListener("scroll", actualizar)

function actualizar(){
    var current_scroll = (scrollY + window.innerHeight);
    console.log(current_scroll)   
    if (bodyHeight == current_scroll){
        console.log("Es igual cabroneees!")
    }
}

/*
if (bodyHeight == current_scroll){
    console.log("Es iguaal!")
}

*/