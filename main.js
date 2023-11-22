const listaDasTeclas = document.querySelectorAll('.tecla')


function som3X3(idElemento){
    document.querySelector(idElemento).play();
}


let contador = 0;
    while (contador < listaDasTeclas.length){
        listaDasTeclas[contador].onclick = function(){
            
            som3X3("#som_tecla_splash");
        
        }
        contador = contador + 1;
    }


   