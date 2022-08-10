window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};


function calcular(){

    const altura = document.getElementById("altura");
    const largura = document.getElementById("largura");

  

    soma = largura.value*altura.value;

    resultado.textContent = soma

}
