const listaDasTeclas = document.querySelectorAll('.tecla')

let contador = 0;
    while (contador < listaDasTeclas.length){
        listaDasTeclas[contador].onclick = somHoraDeAventura
        contador = contador + 1;
    }

function som3X3(){
    document.querySelector('#som_tecla_pom').play();
}
    document.querySelector('.tecla_pom').onclick = somHoraDeAventura
