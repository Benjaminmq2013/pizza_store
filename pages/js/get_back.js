const back_btn = document.getElementById("back_btn")
back_btn.addEventListener("click", ()=>{
    get_back()
})

function get_back(){
    if (estado > 0){
        estado -= 1;
    }else if (estado <= 0){
        console.log("Has llegado al final")
    }
    console.log(estado)


    switch (estado) {
        case 0:
            console.log("El estado vale 0 - switch")
            break;
        case 1:
            get_back_1()
            break;
            
        default:
            break;
    }
}


