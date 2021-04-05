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

function optimizar_estado_1(){
    main_title.innerHTML = "¿Tipo de masa?"

    //Si el usuario vuelve, el pié de página debe reaparecer.
    if (controls.classList.contains("controls")){
        controls.classList.remove("display-none")
    } 
}

function optimizar_estado_2(){
    main_title.innerHTML = "Ingredientes"

    //Si el usuario vuelve, el pié de página debe reaparecer.
    if (controls.classList.contains("controls")){
        controls.classList.remove("display-none")
    } 
}

function optimizar_estado_3(){
    main_title.innerHTML = "Extras"

    //Si el usuario vuelve, el pié de página debe reaparecer.
    if (controls.classList.contains("controls")){
        controls.classList.remove("display-none")
    } 
}

function optimizar_estado_4(){
    main_title.innerHTML = "Login"
    controls.classList.add("display-none")
}
 
function optimizar_estado_5(){
    main_title.innerHTML = "Resumen"
}

function optimizar_estado_6(){
    buying_title.classList.add("display-none")
}

function optimizar_estado_7(){
    buying_title.classList.remove("display-none")
    main_title.innerHTML = "ÉXITO"

    
}