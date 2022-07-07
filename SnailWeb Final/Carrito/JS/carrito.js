/*Carrito*/
 
recuperarDatos();

let sub_total=document.getElementById('sub_total');
let pagoTotal=document.getElementById('totalPag');


function recuperarDatos(){
    var registro ="";
    var subtotal=0;
    var total=0;
    var envio =25.00;
    if (localStorage.length == 0) {
        registro+= '<li>Vacío</li>';
        document.getElementById('carrito-contenido').innerHTML = registro;
        borrar();
        
    } else {
        for(var i = 0; i<=localStorage.length - 1; i++){
            var key = localStorage.key(i);
            var datosJson = JSON.parse(localStorage.getItem(key));
            
            registro += '<div class="producto-carrito" >'+
            `<img src="${datosJson.img}">`+`<img>` +
            '<div class="contenido-pro">'+
            '<div class="nombre-pro stilo">'+ datosJson.nombre+'</div>'+'<hr style="margin: 0;">'+
            '<div class="codigo-pro stilo d-flex">'+'<h1  class="stilo2"> Codigo: </h1>'+datosJson.codigo+'</div>'+'<hr style="margin: 0;">'+
            '<div class="cantidad-pro stilo  d-flex">'+'<h1 class="stilo2"> Cantidad: </h1>'+datosJson.cantidad+'</div>'+ '<hr style="margin: 0;">'+
            '<div class="precio-pro stilo  d-flex">'+'<h1  class="stilo2"> Precio: </h1>'+ datosJson.precio+'</div>'+'</div>'+'<div class="boton-borrar">'+
            `<a  id="borrar-btn" onclick="eliminar_btn()" data-id="${key}">X</a>`  +'</div>'+
             '</div> <br> <hr>'
            subtotal = parseFloat(datosJson.cantidad) * parseFloat(datosJson.precio);
            total = total + subtotal;
           
           
        }
       
    }
    total = total.toFixed(2);
    envio = envio + parseFloat(total) ;
    envio = envio.toFixed(2);
    document.getElementById('carrito-contenido').innerHTML = registro;
    document.getElementById('sub_total').innerHTML = total;
    document.getElementById('totalPag').innerHTML = envio ;

}


function borrar(){
    sub_total.innerHTML = "0";
    pagoTotal.innerHTML = "0"; 
}
function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function eliminar_btn(){
    var id = document.getElementById('borrar-btn').getAttribute('data-id');
   
    localStorage.removeItem(id);
    recuperarDatos();
}
