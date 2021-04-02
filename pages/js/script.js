"use-strict"
const product_1 = document.querySelector(".product_1")
const product_2 = document.querySelector(".product_2")
const product_3 = document.querySelector(".product_3")

product_1.addEventListener("click", ()=>{
    definir_pedido_1("Pizza grande")
})
product_2.addEventListener("click", ()=>{
    definir_pedido_1("Combo grande")
})
product_3.addEventListener("click", ()=>{
    definir_pedido_1("Crear Pizza")
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
    definir_pedido_2("Original")
})
product_5.addEventListener("click", ()=>{
    definir_pedido_2("Orilla de queso")
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