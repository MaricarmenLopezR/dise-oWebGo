var departemento = document.getElementById('departamento')
var ciudad = document.getElementById('ciudad')
var distrito = document.getElementById('distrito')

var departamentos = ['Departamento','Amazonas', 'Cajamarca', 'Cusco', 'Lambayeque', 'Lima']
var ciudades = ['Ciudad','Chachapoyas', 'Bongará', 'Bagua', 'Luya', 'Ciudad',
'Cajamarca', 'Jaén', 'Chota', 'Cutervo', 'Ciudad','Cusco', 'Espinar', 'Paucartambo', 'Urubamba', 'Ciudad', 
'Chiclayo', 'Lambayeque', 'Ferreñafe', 'Ciudad', 'Barranca', 'Huaral', 'Huarochirí', 'Lima']
var distritos = ['Distrito','Asunción', 'Balsas', 'Chachapoyas', 'Cheto', 'Granada', 
'Distrito', 'Chisquilla', 'Florida', 'Jumbilla', 'San Carlos', 'Valera', 'Distrito', 
'Aramango', 'Bagua', 'Copallín', 'El Parco', 'Imaza', 'Distrito', 'Cocabamba', 'Conila', 
'Lámud', 'Longuita', 'Ocumal', 'Distrito', 'Cajamarca', 'Chetilla', 'Cospán', 'Magdalena', 'Matara',
'Distrito', 'Bellavista', 'Chontalí', 'Colasay', 'Huabal', 'Jaén', 'Distrito', 'Chota', 'Llama', 'Querocoto', 
'Tacambamba', 'Tocmoche', 'Distrito', 'Cutervo', 'Pimpingos', 'Querocotillo', 'Santa Cruz', 'Socota', 
'Distrito','Ccorca', 'Cusco', 'Poroy', 'Distrito','Condoroma', 'Espinar', 'Ocoruro', 'Pallpata', 'Pichigua',
'Distrito', 'Caicay', 'Huancarani', 'Kosñipata', 'Paucartambo', 'Distrito', 'Chinchero', 'Hayllabamba', 
'Urubamba', 'Yucay', 'Distrito', 'Chiclayo', 'José Leonardo Ortiz', 'La Victoria', 'Pimentel', 'Santa Victoria',
'Distrito', 'Illimo', 'Mochumí', 'Olmos', 'Pacora', 'Túcume', 'Distrito', 'Pítipo', 'Ferreñafe', 'Incahuasi', 
'Kañaris', 'Distrito', 'Barranca', 'Paramonga', 'Supe', 'Distrito', 'Huaral', 'Ihuari', 'Lampian', 'Pacaraos', 
'Sumbilca', 'Distrito', 'Cuenca', 'Huarochirí', 'Langa', 'San Bartolomé', 'San Damian', 'Distrito',
'Barranco', 'Comas', 'La Molina', 'La Victoria', 'Lima']

function mostrarLugares(arreglo, lugar) {
    var elementos = '';

    for(let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] +'">' + arreglo[i] +'</option>'
    }

    lugar.innerHTML = elementos
}

mostrarLugares(departamentos, departemento)

function recortar(array, inicio, fin, lugar) {
    let recortar = array.slice(inicio, fin)
    mostrarLugares(recortar, lugar)
}

departemento.addEventListener('change', function() {
    var valor = departemento.value

    switch(valor) {
        case 'Amazonas':
            recortar(ciudades, 0, 5, ciudad)
        break
        case 'Cajamarca':
            recortar(ciudades, 5, 10, ciudad)
        break
        case 'Cusco':
            recortar(ciudades, 10, 15, ciudad)
        break
        case 'Lambayeque':
            recortar(ciudades, 15, 19, ciudad)
        break
        case 'Lima':
            recortar(ciudades, 19, 24, ciudad)
        break
    }

    distrito.innerHTML = ''
})

ciudad.addEventListener('change', function() {
    var valor = ciudad.value

    if(valor == 'Chachapoyas') {
        recortar(distritos, 0, 6, distrito)
    } else if(valor == 'Bongará') {
        recortar(distritos, 6, 12, distrito)
    } else if(valor == 'Bagua') {
        recortar(distritos, 12, 18, distrito)
    } else if(valor == 'Luya') {
        recortar(distritos, 18, 24, distrito)
    } else if(valor == 'Cajamarca') {
        recortar(distritos, 24, 30, distrito)
    } else if(valor == 'Jaén') {
        recortar(distritos, 30, 36, distrito)
    } else if(valor == 'Chota') {
        recortar(distritos, 36, 42, distrito)
    } else if(valor == 'Cutervo') {
        recortar(distritos, 42, 48, distrito)
    } else if(valor == 'Cusco') {
        recortar(distritos, 48, 52, distrito)
    } else if(valor == 'Espinar') {
        recortar(distritos, 52, 58, distrito)
    } else if(valor == 'Paucartambo') {
        recortar(distritos, 58, 63, distrito)
    } else if(valor == 'Urubamba') {
        recortar(distritos, 63, 68, distrito)
    } else if(valor == 'Chiclayo') {
        recortar(distritos, 68, 74, distrito)
    } else if(valor == 'Lambayeque') {
        recortar(distritos, 74, 80, distrito)
    } else if(valor == 'Ferreñafe') {
        recortar(distritos, 80, 85, distrito)
    } else if(valor == 'Barranca') {
        recortar(distritos, 85, 89, distrito)
    } else if(valor == 'Huaral') {
        recortar(distritos, 89, 95, distrito)
    } else if(valor == 'Huarochirí') {
        recortar(distritos, 95, 101, distrito)
    } else {
        recortar(distritos, 101, 107, distrito)
    }
})

recuperarDatos();

function recuperarDatos(){
    var registro ="";
    var subtotal=0;
    var total=0;
    var envio =25.00;
    if (localStorage.length == 0) {
        registro+= '<li>Vacío</li>';
        document.getElementById('carrito-contenido').innerHTML = registro;
        
        
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
            `<a  id="borrar" onclick="eliminar()" data-id="${key}">X</a>`  +'</div>'+
             '</div> <br> <hr>'
            subtotal = parseFloat(datosJson.cantidad) * parseFloat(datosJson.precio);
            total = total + subtotal;
           
           
        }
       
    }
    total = total.toFixed(2);
    envio = envio + parseFloat(total) ;
    envio = envio.toFixed(2);
    document.getElementById('producto-cotenido').innerHTML = registro;
    document.getElementById('sub_total').innerHTML = total;
    document.getElementById('total').innerHTML = envio ;

}





function datosCliente(){
    const total= document.getElementById('total').textContent;
    localStorage.clear();
    const nombre= document.getElementById('nombre').value;
    const apellido=document.getElementById('apellido').value;
    const dni=document.getElementById('documento').value;
    const email=document.getElementById('email').value;
    const ciudad=document.getElementById('ciudad').value;
    const distrito=document.getElementById('distrito').value;
    const direccion=document.getElementById('domicilio').value;
    const telefono=document.getElementById('telefono').value;
    const codigoP=document.getElementById('codigoP').value;
    const referencia=document.getElementById('referencia').value;
  

    const datosC = {
        'nombre' : nombre,
        'apellido' : apellido,
        'email': email,
        'ciudad': ciudad,
        'distrito': distrito,
        'direccion':direccion,
        'telefono':telefono,
        'codigoP':codigoP,
        'referencia':referencia,
        'total':total,
    };


    localStorage.setItem(dni,JSON.stringify(datosC));
    console.log(datosC);


}