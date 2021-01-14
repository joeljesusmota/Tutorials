const btnRegresar = document.getElementById('btnRegreso');
const fichaJugador = document.querySelector('.ficha-jugador');
const imgJugador = document.querySelector('.img-jugador');
const conFrente = document.querySelector('.contenedor-frente');
const conReverso = document.querySelector('.contenedor-reverso');
const btnFicha = document.getElementById('btnFicha');
const body = document.querySelector('body');


btnFicha.addEventListener('click', (e) => {
    e.preventDefault();

    fichaJugador.classList.add('arriba-ficha');
    imgJugador.classList.add('arriba-ficha');
    conFrente.classList.add('arriba-contenedor');

    conReverso.classList.add('arriba-reverso');
    body.classList.add('oscuro');
})


btnRegresar.addEventListener('click', (e) => {
  e.preventDefault();

    fichaJugador.classList.remove('arriba-ficha');
    imgJugador.classList.remove('arriba-ficha');
    conFrente.classList.remove('arriba-contenedor');

    conReverso.classList.add('abajo-contenedor');
    conReverso.classList.remove('arriba-reverso');

    body.classList.remove('oscuro');
});