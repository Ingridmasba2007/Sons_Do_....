
function som3X3(idElemento){
    document.querySelector(idElemento).play();
}


let contador = 0;

const listaDasTeclas = document.querySelectorAll(".tecla")

    while (contador < listaDasTeclas.length){
        const Instrumento = listaDasTeclas[contador].classList
        console.log(Instrumento)
        
        listaDasTeclas[contador].onclick = function(){
            

            som3X3(`#som_${Instrumento}`);
        
        }
        contador = contador + 1;
    }


   