function modal_01() {
    Swal.fire({
        icon: 'success',
        title: 'Inicio finalizada',
        text: "Se ha iniciado sesión con éxito!",
        showConfirmButton: true,
        confirmButtonText: '<a style="color: white; text-decoration: none;" class="inicio" href="#">Aceptar</a>',
        confirmButtonColor: '#3085d6',
        allowOutsideClick: false
    });    
}


function modal_02() {
    Swal.fire({
        icon: 'success',
        title: 'Suscripción finalizada',
        text: "Se ha suscripto con éxito!",
        showConfirmButton: true,
        confirmButtonText: '<a style="color: white; text-decoration: none;" class="inicio" href="#">Aceptar</a>',
        confirmButtonColor: '#3085d6',
        allowOutsideClick: false
    });    
}


function modal_03() {
    Swal.fire({
        icon: 'success',
        title: 'Codigó Añadido',
        text: "Se ha usado el codigó en su compra!",
        showConfirmButton: true,
        confirmButtonText: '<a style="color: white; text-decoration: none;" class="inicio" href="#">Aceptar</a>',
        confirmButtonColor: '#3085d6',
        allowOutsideClick: false
    });    
}

function modal_04() {  
    Swal.fire({
        title: 'Advertencia',
        text: "Se perderá todos los datos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<a style="color: white; text-decoration: none; "  onclick="eliminarTodo()" class="inicio" href="../index.html">Regresar al inicio</a>',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false
    });
}