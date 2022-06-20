const carrito = document.querySelector('#carrito_compra');
const listaProducto = document.querySelector('#lista_producto');
const contenedorCarrito = document.querySelector('#lista_carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar_carrito');
const precioTotal = document.querySelector('#priceTotal');

let totalCard =0;
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     listaProducto.addEventListener('click', agregarProducto);
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
         id: producto.querySelector('a').getAttribute('data-id'), 
         titulo: producto.querySelector('h4').textContent,
         precio: producto.querySelector('div p span').textContent,
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
    }
}


function carritoHTML(){

    vaciarCarrito();

    articulosCarrito.forEach((producto) => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td>${producto.titulo}</td>
              <td>s/${producto.precio}</td>
              <td>${producto.cantidad} </td>
              <td>
                   <a href="#" class="borrar_producto" data-id="${producto.id}">X</a>
              </td>
         `;
         contenedorCarrito.appendChild(row);
         precioTotal.innerHTML = totalCard;
    });
}

function vaciarCarrito() {
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
         precioTotal.innerHTML = '0';
     }
}

function capturarDato() {
     var nombres= document.getElementById("nombres").value;
     var email= document.getElementById("email").value;
     if ((nombres != undefined) && (email != undefined)) {
          document.getElementById("dato").innerHTML = "Nombre y Apellidos: " + nombres + 
          "<br> Email: " + email + "<br> Precio Total: s/. " + totalCard;     
     } else {
          document.getElementById("dato").innerHTML = "No has ingresado datos"
     }
     document.getElementById("nombres").value = "";
     document.getElementById("email").value = "";
}

