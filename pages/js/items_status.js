function update_items(status){
    switch (status) {
        case 0:
            optimizar_estado_1()
            break;
        case 1:
            optimizar_estado_2()
            break;
        case 2:
            optimizar_estado_3()
            break;
        case 3:
            optimizar_estado_4()
            break;
        case 4:
            optimizar_estado_5()
            break;
        case 5:
            optimizar_estado_6()
            break;
        case 6:
            optimizar_estado_7()
            break;        
    
        default:
            console.log("El estado se encuentra indefinido.")
            break;
    }
}

const buying_title = document.querySelector(".buying_title") //Contenedor del título principal
const main_title = document.getElementById("main_title")  //Título principal

const controls = document.querySelector(".controls") //Pié de página que contiene botones de cancelar

const level_1 = document.querySelector(".level_1")
const level_2 = document.querySelector(".level_2")
const level_3 = document.querySelector(".level_3")
const level_4 = document.querySelector(".level_4")
const level_5 = document.querySelector(".level_5")
const level_6 = document.querySelector(".level_6")
const level_7 = document.querySelector(".level_7")

function optimizar_estado_1(){
    main_title.innerHTML = "¿Tipo de masa?"

    //Si el usuario vuelve, el pié de página debe reaparecer.
    if (controls.classList.contains("controls")){
        controls.classList.remove("display-none")
    } 

    //Barra de estado
    level_1.classList.remove("active_level")
    level_2.classList.add("active_level")
}

function optimizar_estado_2(){
    main_title.innerHTML = "Ingredientes"

    //Si el usuario vuelve, el pié de página debe reaparecer.
    if (controls.classList.contains("controls")){
        controls.classList.remove("display-none")
    } 

    //Barra de estado
    level_2.classList.remove("active_level")
    level_3.classList.add("active_level")
}

function optimizar_estado_3(){
    main_title.innerHTML = "Extras"

    //Si el usuario vuelve, el pié de página debe reaparecer.
    if (controls.classList.contains("controls")){
        controls.classList.remove("display-none")
    } 

    //Barra de estado
    level_3.classList.remove("active_level")
    level_4.classList.add("active_level")
}

function optimizar_estado_4(){
    main_title.innerHTML = "Login"
    controls.classList.add("display-none")

    //Barra de estado
    level_4.classList.remove("active_level")
    level_5.classList.add("active_level")
}
 
function optimizar_estado_5(){
    main_title.innerHTML = "Resumen"

    //Barra de estado
    level_5.classList.remove("active_level")
    level_6.classList.add("active_level")
}

function optimizar_estado_6(){
    buying_title.classList.add("display-none")
}

function optimizar_estado_7(){
    buying_title.classList.remove("display-none")
    main_title.innerHTML = "ÉXITO"

    //Barra de estado
    level_6.classList.remove("active_level")
    level_7.classList.add("active_level")
}