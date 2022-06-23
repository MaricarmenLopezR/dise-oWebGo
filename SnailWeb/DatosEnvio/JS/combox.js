var departemento = document.getElementById('departamento')
var ciudad = document.getElementById('ciudad')
var distrito = document.getElementById('distrito')

var departamentos = ['Departamento','Amazonas', 'Cajamarca', 'Cusco', 'Lambayeque', 'Lima']
var ciudades = ['Ciudad','Chachapoyas', 'Bongará', 'Bagua', 'Luya', 
'Castilla']
var distritos = ['Distrito','Imperial', 'San Vicente', 'Asia', 'Mala', 'Pacaraos', 'Sumbilca', 'Aucallama', 'Andahua', 'Ayo']

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
            recortar(ciudades, 2, 3, ciudad)
        break
        case 'Cajamarca':
            recortar(ciudades, 2, 3, ciudad)
        break
        case 'Cajamarca':
            recortar(ciudades, 2, 3, ciudad)
        break
        case 'Cajamarca':
            recortar(ciudades, 2, 3, ciudad)
        break
    }

    $distrito.innerHTML = ''
})

$provincia.addEventListener('change', function() {
    let valor = $provincia.value

    if(valor == 'Cañete') {
        recortar(distritos, 0, 4, $distrito)
    } else if(valor == 'Huaral') {
        recortar(distritos, 4, 7, $distrito)
    } else {
        recortar(distritos, 7, 9, $distrito)
    }
})

// var opt_1 = new Array("-", "Chachapoyas", "Bongará", "Bagua", "Luya");
// var opt_2 = new Array("-", "Cajamarca", "Jaén", "Chota", "Cutervo");
// var opt_3 = new Array("-", "Cusco", "Espinar", "Paucartambo", "Urubamba");
// var opt_4 = new Array("-", "Chiclayo", "Lambayeque", "Ferreñafe");
// var opt_5 = new Array("-", "Barranca", "Huaral", "Huarochirí", "Lima");

// var dto_1 = new Array("-", "Asunción", "Balsas", "Chachapoyas", "Cheto", "Granada");
// var dto_2 = new Array("-", "Chisquilla", "Florida", "Jumbilla", "San Carlos", "Valera");
// var dto_3 = new Array("-", "Aramango", "Bagua", "Copallín", "El Parco", "Imaza");
// var dto_4 = new Array("-", "Cocabamba", "Conila", "Lámud", "Longuita", "Ocumal");

// var ctp_1 = new Array("-", "Cajamarca", "Chetilla", "Cospán", "Magdalena", "Matara");
// var ctp_2 = new Array("-", "Bellavista", "Chontalí", "Colasay", "Huabal", "Jaén");
// var ctp_3 = new Array("-", "Chota", "Llama", "Querocoto", "Tacambamba", "Tocmoche");
// var ctp_4 = new Array("-", "Cutervo", "Pimpingos", "Querocotillo", "Santa Cruz", "Socota");

// var ptp_1 = new Array("-", "Ccorca", "Cusco", "Poroy");
// var ptp_2 = new Array("-", "Condoroma", "Espinar", "Ocoruro", "Pallpata", "Pichigua");
// var ctp_3 = new Array("-", "Caicay", "Huancarani", "Kosñipata", "Paucartambo");
// var ctp_4 = new Array("-", "Chinchero", "Hayllabamba", "Urubamba", "Yucay");

// var btp_1 = new Array("-", "Chiclayo", "José Leonardo O.", "La Victoria", "Pimentel", "Santa Victoria");
// var btp_2 = new Array("-", "Illimo", "Mochumí", "Olmos", "Pacora", "Túcume");
// var btp_3 = new Array("-", "Pítipo", "Ferreñafe", "Incahuasi", "Kañaris");

// var atp_1 = new Array("-", "Barranca", "Paramonga", "Supe");
// var atp_2 = new Array("-", "Huaral", "Ihuari", "Lampian", "Pacaraos", "Sumbilca");
// var atp_3 = new Array("-", "Cuenca", "Huarochirí", "Langa", "San Bartolomé", "San Damian");
// var atp_4 = new Array("-", "Barranco", "Comas", "La Molina", "La Victoria", "Lima");

// function cambiarCiudad() {
//     var objeto;
//     objeto = document.formulario1.departamento[document.formulario1.departamento.selectedIndex].value;
//     if (objeto!=0) {
//         mis_pts=eval("opt_" + objeto);
//         num_opts= mis_pts.length;
//         document.formulario1.ciudad.length = num_opts;
//         for (i = 0; i < num_opts; i++) {
//             document.formulario1.ciudad.options[i].value = mis_pts[i];
//             document.formulario1.ciudad.options[i].text = mis_pts[i];            
//         }
//     }else{
//         document.formulario1.ciudad.length=1;
//         document.formulario1.ciudad.options[0].value="-";
//         document.formulario1.ciudad.options[0].text = "-";
//     }
//     document.formulario1.ciudad.options[0].selected = true;
// }

// function cambiarDistrito() {
//     var dist;
//     dist = document.formulario1.ciudad[document.formulario1.ciudad.selectedIndex].value;
//     if (dist!=0) {
//         mis_dto=eval("dto_" + dist);
//         num_dtos= mis_dto.length;
//         document.formulario1.distrito.length = num_dtos;
//         for (i = 0; i < num_dtos; i++) {
//             document.formulario1.distrito.options[i].value = mis_dto[i];
//             document.formulario1.distrito.options[i].text = mis_dto[i];            
//         }
//     }else{
//         document.formulario1.distrito.length=1;
//         document.formulario1.distrito.options[0].value="-";
//         document.formulario1.distrito.options[0].text = "-";
//     }
//     document.formulario1.distrito.options[0].selected = true;
// }