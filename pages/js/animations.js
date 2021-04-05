// Navegación 3
// Este archivo recibe el estado del proceso y dispara la animación correcta para mostrar u ocultar las demás fases.


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
        case 3:
            animacion_fase_4()
            console.log("SE DISPARÓ LA ANIMACIÓN CERRANDO LA FASE 4")
            break;
        case 4:
            animacion_fase_5()
            console.log("SE DISPARÓ LA ANIMACIÓN CERRANDO LA FASE 5")
            break;
        case 5:
            animacion_fase_6()
            console.log("SE DISPARÓ LA ANIMACIÓN CERRANDO LA FASE 6")
            break;
        case 6:
            animacion_fase_7()
            console.log("SE DISPARÓ LA ANIMACIÓN CERRANDO LA FASE 7")
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




function animacion_fase_4(){
    const products_selection_container_4 = document.querySelector(".products_selection_container_4")
    products_selection_container_4.classList.remove("hello_products")
    products_selection_container_4.classList.add("bye_products")

    
    const login_container = document.querySelector(".login_container")
    login_container.classList.remove("display-none")
    login_container.classList.add("hello_products")
    
    

    setTimeout(function (){
        products_selection_container_4.classList.add("display-none")        
    }, 1000)
}


function animacion_fase_5(){
    const login_container = document.querySelector(".login_container")
    login_container.classList.remove("hello_products")
    login_container.classList.add("bye_products")

    const resumen_container = document.querySelector(".resumen_container")
    resumen_container.classList.remove("display-none")
    resumen_container.classList.add("hello_products")

    setTimeout(function (){
        login_container.classList.add("display-none")        
    }, 1000)
}


function animacion_fase_6(){
    const resumen_container = document.querySelector(".resumen_container")
    resumen_container.classList.remove("hello_products")
    resumen_container.classList.add("bye_products")

    const payment_section = document.querySelector(".payment_section")
    payment_section.classList.remove("display-none")
    payment_section.classList.add("hello_products")


    setTimeout(function (){
        resumen_container.classList.add("display-none")        
    }, 1000)
}


function animacion_fase_7(){
    const payment_container = document.querySelector(".payment_container")
    payment_container.classList.remove("hello_products")
    payment_container.classList.add("bye_products")

    const success_container = document.querySelector(".success_container")
    success_container.classList.remove("display-none")
    success_container.classList.add("hello_products")


    setTimeout(function (){
        payment_container.classList.add("display-none")        
    }, 1000)
}