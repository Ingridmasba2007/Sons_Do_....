


function som3X3(idElemento){
    document.querySelector(idElemento).play();
}


let contador = 0;
    while (contador < listaDasTeclas.length){
        listaDasTeclas[contador].onclick = function(){
         const Instrumento = listaDasTeclas[contador].classList
         console.log(Instrumento)   
            som3X3("#som_tecla_splash");
        
        }
        contador = contador + 1;
    }


   