const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquirda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//event Listener para la flecha derecha

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

//event Listener para la flecha Izquierda

flechaIzquirda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});



