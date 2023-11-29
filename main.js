
function som3X3(idElemento){
    document.querySelector(idElemento).play();
}




const listaDasTeclas = document.querySelectorAll(".tecla")

for(let contador= 0; contador < listaDasTeclas.length; contador++ ){
    const Instrumento = listaDasTeclas[contador].classList
    console.log(Instrumento)

    listaDasTeclas[contador].onclick = function(){
            
    som3X3(`#som_${Instrumento[1]}`);

    }
   
}

   