// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista_productos');
const contenedorCarrito = document.querySelector('#lista_carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar_carrito'); 
const precioTotal = document.querySelector('#priceTotal');
const contadorProducto = document.querySelector('.count_product');
let totalCard =0;
let articulosCarrito = [];
let countProduct =0;

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     listaProductos.addEventListener('click', agregarProducto);
     carrito.addEventListener('click', eliminarProducto);
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function agregarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregarCarrito')) {
         const producto = e.target.parentElement.parentElement;
         leerDatosProducto(producto);
    }
}

function leerDatosProducto(producto) {
    const infoProducto = {
         imagen: producto.querySelector('img').src,
         titulo: producto.querySelector('h4').textContent,
         precio: producto.querySelector('div p span').textContent,
         id: producto.querySelector('a').getAttribute('data-id'), 
         cantidad: 1
    }
    totalCard = parseFloat(totalCard) + parseFloat(infoProducto.precio);
    totalCard = totalCard.toFixed(2);

    if( articulosCarrito.some( producto => producto.id === infoProducto.id ) ) { 
         const productos = articulosCarrito.map( producto => {
              if( producto.id === infoProducto.id ) {
                   producto.cantidad++;
                    return producto;
               } else {
                    return producto;
            }
         });
         articulosCarrito = [...productos];
    }  else {
         articulosCarrito = [...articulosCarrito, infoProducto];
         countProduct++;
    }
    carritoHTML();
}


function eliminarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar_producto') ) {
         const productoId = e.target.getAttribute('data-id')
         articulosCarrito.forEach(value =>{
               if (value.id ==productoId) {
                    let priceReduce = parseFloat(value.precio) * parseFloat(value.cantidad);
                    totalCard = totalCard - priceReduce;
                    totalCard = totalCard.toFixed(2);
               }
         });
         articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
         carritoHTML();
         countProduct--;
    }
}


function carritoHTML(){

    vaciarCarrito();

    articulosCarrito.forEach((producto) => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td>  
                   <img src="${producto.imagen}" width=100>
              </td>
              <td>${producto.titulo}</td>
              <td>s/${producto.precio}</td>
              <td>${producto.cantidad} </td>
              <td>
                   <a href="#" class="borrar_producto" data-id="${producto.id}">X</a>
              </td>
         `;
         contenedorCarrito.appendChild(row);
         precioTotal.innerHTML = totalCard;
         contadorProducto.innerHTML = countProduct;
    });
}

function vaciarCarrito() {
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
         precioTotal.innerHTML = '0';
         contadorProducto.innerHTML = '0';
     }
}
