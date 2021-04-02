"use-strict"
function bye_products(estado){
    switch (estado) {
        case 0:
            animacion_fase_1()
            console.log("SE DISPARÓ LA ANIMACIÓN CERRANDO LA FASE 1")
            break;
        case 1:
            animacion_fase_2()
            console.log("SE DISPARÓ LA ANIMACIÓN CERRANDO LA FASE 2")
            break;
        case 2:
            animacion_fase_3()
            console.log("SE DISPARÓ LA ANIMACIÓN CERRANDO LA FASE 3")
            break;
        default:
            console.log("No seleccionaste ningún producto")
            break;
    }
    
}

function animacion_fase_1(){
    const products_selection_container = document.querySelector(".products_selection_container")
    products_selection_container.classList.add("bye_products")

    const products_selection_container_2 = document.querySelector(".products_selection_container_2")
    products_selection_container_2.classList.remove("display-none")
    products_selection_container_2.classList.add("hello_products")


    setTimeout(function (){
        products_selection_container.classList.add("display-none")        
    }, 1000)
}



function animacion_fase_2(){
    const products_selection_container_2 = document.querySelector(".products_selection_container_2")
    products_selection_container_2.classList.remove("hello_products")
    products_selection_container_2.classList.add("bye_products")
    
    const products_selection_container_3 = document.querySelector(".products_selection_container_3")
    products_selection_container_3.classList.remove("display-none")
    products_selection_container_3.classList.add("hello_products")
      

    setTimeout(function (){
        products_selection_container_2.classList.add("display-none")        
    }, 1000)

}




function animacion_fase_3(){
    const products_selection_container_3 = document.querySelector(".products_selection_container_3")
    products_selection_container_3.classList.remove("hello_products")
    products_selection_container_3.classList.add("bye_products")

    
    const products_selection_container_4 = document.querySelector(".products_selection_container_4")
    products_selection_container_4.classList.remove("display-none")
    products_selection_container_4.classList.add("hello_products")
    
    

    setTimeout(function (){
        products_selection_container_3.classList.add("display-none")        
    }, 1000)
}