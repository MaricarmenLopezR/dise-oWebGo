/*Carrito*/
 
recuperarDatos();
total();
const borrar = document.getElementById('borrar');


function recuperarDatos(){
    var registro ="";
    if (localStorage.length == 0) {
        registro+= '<li>Vacío</li>';
        
    } else {
        for(var i = 0; i<=localStorage.length - 1; i++){
            var key = localStorage.key(i);
            var subtotal;
            var datosJson = JSON.parse(localStorage.getItem(key));
            
            registro += '<div class="producto-carrito" >'+
            `<img src="${datosJson.img}">`+`<img>` +
            '<div class="contenido-pro">'+
            '<div class="nombre-pro stilo">'+ datosJson.nombre+'</div>'+'<hr style="margin: 0;">'+
            '<div class="codigo-pro stilo d-flex">'+'<h1  class="stilo2"> Codigo: </h1>'+datosJson.codigo+'</div>'+'<hr style="margin: 0;">'+
            '<div class="cantidad-pro stilo  d-flex">'+'<h1 class="stilo2"> Cantidad: </h1>'+datosJson.cantidad+'</div>'+ '<hr style="margin: 0;">'+
            '<div class="precio-pro stilo  d-flex">'+'<h1  class="stilo2"> Precio: </h1>'+ datosJson.precio+'</div>'+'</div>'+'<div class="boton-borrar">'+
            `<a  id="borrar" data-id="${key}">X</a>`  +'</div>'+
             '</div> <br> <hr>'
            subtotal = datosJson.total;
           
        }
        
    }
  
    document.getElementById('carrito-contenido').innerHTML = registro;
    document.getElementById('sub_total').innerHTML=subtotal;

}

function total(){
    var sub_total = document.getElementBy('sub_total');
   
    var pagototal;
    pagototal= sub_total + 25;
    console.log(sub_total);
    document.getElementById('totalPag').innerHTML = pagototal;
}

borrar.addEventListener('click', () => {
    var id = borrar.getAttribute('data-id');
    console.log(id);
    localStorage.removeItem(id);
    recuperarDatos();
});

