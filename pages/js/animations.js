"use-strict"
function bye_products(estado){
    switch (estado) {
        case 0:
            animacion_fase_1()
            console.log("SE DISPARÓ LA ANIMACIÓN CERRANDO LA FASE 1")
            break;
        case 1:
            console.log("El estado vale 1")
        default:
            break;
    }
    
}

function animacion_fase_1(){
    const products_selection_container = document.querySelector(".products_selection_container")
    products_selection_container.classList.add("bye_products")

    setTimeout(function (){
        products_selection_container.classList.add("display-none")
        console.log("Contenido oculto")
    }, 1000)
}