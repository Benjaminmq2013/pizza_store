const create_image = document.querySelector(".create_image");
const pick_it_up = document.querySelector(".pick_it_up");
const pedido_logo = document.querySelector(".pedido_logo");

create_image.addEventListener("click", iniciar_compra)
pick_it_up.addEventListener("click", iniciar_compra)
pedido_logo.addEventListener("click", iniciar_compra)

function iniciar_compra(){
    window.open("https://benjaminmq2013.github.io/pizza_store/pages/buy.html","_self")
}
