const listaDasTeclas = document.querySelectorAll('.tecla')

let contador = 0;
    while (contador < 9){
        listaDasTeclas[contador].onclick = somHoraDeAventura
        contador = contador + 1;
    }

function somHoraDeAventura (){
    document.querySelector('#som_tecla_pom').play();
}
    document.querySelector('.tecla_pom').onclick = somHoraDeAventura
