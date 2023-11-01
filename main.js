const listaDasTeclas = document.querySelectorAll('.tecla')

function somHoraDeAventura (){
    document.querySelector('#som_tecla_pom').play();
}
    document.querySelector('.tecla_pom').onclick = somHoraDeAventura

listaDasTeclas[0].onclick = somHoraDeAventura
