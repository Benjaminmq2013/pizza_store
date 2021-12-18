// Navegación 1:
// Este archivo define la lista de productos y lláma a navegacion.js y animations.js para ir al siguiente paso.


"use-strict"
const product_1 = document.querySelector(".product_1")
const product_2 = document.querySelector(".product_2")
const product_3 = document.querySelector(".product_3")

product_1.addEventListener("click", ()=>{
    definir_pedido_1({nombre:"Pizza grande", precio: 16.99})
})
product_2.addEventListener("click", ()=>{
    definir_pedido_1({nombre:"Combo Grande", precio: 17.77})
})
product_3.addEventListener("click", ()=>{
    definir_pedido_1({nombre:"Crear Pizza", precio: 18.89})
})

let esta_compra = []

let fase_1_completa = false;

//Pedido_1 tiene 3 opciones: (1. pizza, 2. combo, 3. crear)
function definir_pedido_1 (pedido){
   
    
    if (fase_1_completa == false){
        fase_1_completa = true;
        esta_compra.push(pedido)
        console.log(esta_compra)
    
        //Origen en navigation.js
        compra_abrir_paso_2()
    } else if (fase_1_completa == true){
        console.log("No clickees más veces aquí")
    }
    
}


// AQUÍ INICIA LA FASE 2

const product_4 = document.querySelector(".product_4")
const product_5 = document.querySelector(".product_5")

product_4.addEventListener("click", ()=>{
    definir_pedido_2({nombre:"Masa Original", precio: 0})
})
product_5.addEventListener("click", ()=>{
    definir_pedido_2({nombre:"Orilla de queso", precio: 2.99})
})

let fase_2_completa = false;

function definir_pedido_2(pedido){ 
    if (fase_2_completa == false){
        fase_2_completa = true;
        esta_compra.push(pedido)
        console.log(esta_compra)
    
        //Origen en navigation.js
        compra_abrir_paso_3()
    } else if (fase_2_completa == true){
        console.log("No clickees más veces aquí")
    }
}


// AQUÍ INICIA LA FASE 3

const product_6 = document.querySelector(".product_6")
const product_7 = document.querySelector(".product_7")

product_6.addEventListener("click", ()=>{
    definir_pedido_3({nombre:"Jamón", precio: 2.83})
})
product_7.addEventListener("click", ()=>{
    definir_pedido_3({nombre:"Pepperoni", precio: 3.00})
})

let fase_3_completa = false;

function definir_pedido_3(pedido){ 
    if (fase_3_completa == false){
        fase_3_completa = true;
        esta_compra.push(pedido)
        console.log(esta_compra)
    
        //Origen en navigation.js
        compra_abrir_paso_4()
    } else if (fase_3_completa == true){
        console.log("No clickees más veces aquí")
    }
}


// AQUÍ INICIA LA FASE 4
const product_8 = document.querySelector(".product_8")
const product_9 = document.querySelector(".product_9")

product_8.addEventListener("click", ()=>{
    definir_pedido_4({nombre:"Papas", precio: 3.69})
})
product_9.addEventListener("click", ()=>{
    definir_pedido_4({nombre:"Palitroques", precio: 7.96})
})


let fase_4_completa = false;

function definir_pedido_4(pedido){ 
    if (fase_4_completa == false){
        fase_4_completa = true;
        esta_compra.push(pedido)
        console.log(esta_compra)
    
        //Origen en navigation.js
        compra_abrir_paso_5()
        resumir_esta_compra(esta_compra)
    } else if (fase_4_completa == true){
        console.log("No clickees más veces aquí")
    }
}



// AQUÍ INICIA LA FASE 5 - LOGIN
const skip_login = document.querySelector(".skip_login")
const register_btn = document.querySelector(".register_btn")

register_btn.addEventListener("click", iniciar_sesion)
skip_login.addEventListener("click", iniciar_sesion);

function iniciar_sesion(){    
        //Origen en navigation.js
        compra_abrir_paso_6()
}





// AQUÍ INICIA LA FASE 6 - RESUME
        
const resume_payment_btn = document.querySelector(".resume_payment_btn")

resume_payment_btn.addEventListener("click", ()=>{
    definir_resumen()
})

function definir_resumen(){
    //Origen en navigation.js
    compra_abrir_paso_7()
}




// AQUÍ INICIA LA FASE 7 - payment
        
const continue_button = document.querySelector(".continue_button")

continue_button.addEventListener("click", ()=>{
    validar_pago()
})

function validar_pago(){
    //Origen en navigation.js
    compra_abrir_paso_8()
}



// RESUMIENTO LA COMPRA


let total = 0;

function resumir_esta_compra(resumen){
    for (let i = 0; i < resumen.length; i++) {
        let pedido_container = document.querySelector(".pedido" + (i+1))
        let item_price = document.querySelector(".item_price_" + (i+1))

        pedido_container.innerHTML = resumen[i].nombre;
        item_price.innerHTML = ("$" + resumen[i].precio);

        total =total + resumen[i].precio;    
        
    }
    let total_esta_compra = document.querySelector(".total_esta_compra")
    total_esta_compra.innerHTML = ("Total: $" + total.toFixed(2))

}


const register_button = document.getElementById("register_button");
register_button.addEventListener("click", function (event){
    event.preventDefault()
})



// Botones para eliminar productos del resumen.

eliminate_button_1 = document.getElementById("eliminate_button_1")
eliminate_button_2 = document.getElementById("eliminate_button_2")
eliminate_button_3 = document.getElementById("eliminate_button_3")
eliminate_button_4 = document.getElementById("eliminate_button_4")

const item_one = document.querySelector(".item_one")
const item_two = document.querySelector(".item_two")
const item_three = document.querySelector(".item_three")
const item_four = document.querySelector(".item_four")

eliminate_button_1.addEventListener("click", ()=>{
    item_one.classList.add("eliminate_product")
    setTimeout( function (){
        item_one.classList.add("display-none")
    }, 500)

    esta_compra[0].precio = 0;
    total = 0;
    resumir_esta_compra(esta_compra)
})
eliminate_button_2.addEventListener("click", ()=>{
    item_two.classList.add("eliminate_product")
    setTimeout( function (){
        item_two.classList.add("display-none")
    }, 500)

    esta_compra[1].precio = 0;
    total = 0;
    resumir_esta_compra(esta_compra)
})
eliminate_button_3.addEventListener("click", ()=>{
    item_three.classList.add("eliminate_product")
    setTimeout( function (){
        item_three.classList.add("display-none")
    }, 500)

    esta_compra[2].precio = 0;
    total = 0;
    resumir_esta_compra(esta_compra)
})
eliminate_button_4.addEventListener("click", ()=>{
    item_four.classList.add("eliminate_product")
    setTimeout( function (){
        item_four.classList.add("display-none")
    }, 500)

    esta_compra[3].precio = 0;
    total = 0;
    resumir_esta_compra(esta_compra)
})