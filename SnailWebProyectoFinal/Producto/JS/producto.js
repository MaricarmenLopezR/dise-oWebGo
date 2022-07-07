/*carrito */
const fila = document.querySelector('.contenedor-carousel');
const productos= document.querySelectorAll('.producto');


const flechaIzquierda =  document.getElementById('flecha-izquierda');
const flechaDerecha =  document.getElementById('flecha-derecha');

const fila2 = document.querySelector('.contenedor-carousel2');
const flechaIzquierda2 =  document.getElementById('flecha-izquierda2');
const flechaDerecha2 =  document.getElementById('flecha-derecha2');

const fila3 = document.querySelector('.contenedor-carousel3');
const flechaIzquierda3 =  document.getElementById('flecha-izquierda3');
const flechaDerecha3 =  document.getElementById('flecha-derecha3');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    
});
flechaDerecha2.addEventListener('click', () => {
    fila2.scrollLeft += fila2.offsetWidth;

    
});

flechaIzquierda2.addEventListener('click', () => {
    fila2.scrollLeft -= fila2.offsetWidth;

    
});
flechaDerecha3.addEventListener('click', () => {
    fila3.scrollLeft += fila3.offsetWidth;

    
});

flechaIzquierda3.addEventListener('click', () => {
    fila3.scrollLeft -= fila3.offsetWidth;

    
});




productos.forEach((producto) =>{
    producto.addEventListener('mouseenter', (e) =>{
        const elmento= e.currentTarget;
        setTimeout(()=>{
            productos.forEach(producto => producto.classList.remove('hover'));
            elmento.classList.add('hover');
        },300);
    });
});


fila.addEventListener('mouseleave',()=>{
    productos.forEach(producto => producto.classList.remove('hover'));
});


