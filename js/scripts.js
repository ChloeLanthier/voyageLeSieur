const btnplus = document.querySelector(".js-plus");
const conteneurTransport = document.querySelector(".conteneurTransport");

btnplus.addEventListener("click", ouvreferme);

function ouvreferme(){ 
    conteneurTransport.classList.toggle("invisible");
}

