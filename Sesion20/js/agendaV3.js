function guardarDatos() {
    var nombre = document.getElementById('nombres').value;
    var movil = document.getElementById('movils').value;
    var email  = document.getElementById('emails').value;
    //-----------------------//
    var datos={
        'movils': movil,
        'emails':email,
    };
    //-----------------------//
    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById('nombres').value = "";
    document.getElementById('movils').value = "";
    document.getElementById('emails').value = "";
    
    actualizarDatoss();

}

function recuperarDatos(){
    var nombre=document.getElementById('nombres').value;
    var valor=JSON.parse(localStorage.getItem(nombre));
    document.getElementById('nombres').value=nombre;
    document.getElementById('movils').value= valor.movil;
    document.getElementById('emails').value= valor.email;
}

function eliminarDatoss() {
    var nombre = document.getElementById('nombres').value;
    localStorage.removeItem(nombre);
    actualizarDatoss();
}

function eliminarTodos() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatoss() {
    var registro="";
    if (localStorage.length ===0) {
        registro += '<li>Vacío</li>';
    } else {
        for (var i=0; i <= localStorage.length -1; i++) {
            var key = localStorage.key(i);
            var datos_registrados=JSON.parse(localStorage.getItem(key));
            registro += '<li>' + '<span class= "nom">' + key + '</span>'
            + '<span class="nom">' + datos_registrados.movil + '</span>' + '<span class="nom">' 
            + datos_registrados.email + '</span>' +
            '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}