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