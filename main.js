const listaDasTeclas = document.querySelectorAll('.tecla')

let contador = 0;
    while (contador < listaDasTeclas.length){
        listaDasTeclas[contador].onclick = function(){
            
            som3X3("#som_tecla_splash");
        
        }
        contador = contador + 1;
    }

function som3X3(idElemento){
    document.querySelector(idElemento).play();
}
    document.querySelector('.tecla_pom').onclick = som3X3("som_tecla_splash")
