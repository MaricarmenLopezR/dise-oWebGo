function modal_01() {
    Swal.fire({
        icon: 'success',
        title: 'Compra finalizada',
        text: "Pago realizado con éxito!",
        showConfirmButton: true,
        confirmButtonText: '<a style="color: white; text-decoration: none;" class="inicio" href="../index.html">Aceptar</a>',
        confirmButtonColor: '#3085d6',
        allowOutsideClick: false
    });    
}

function modal_02() {  
    Swal.fire({
        title: 'Advertencia',
        text: "Se perderá todos los datos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<a style="color: white; text-decoration: none; " class="inicio" href="../index.html">Regresar inicio</a>',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false
    });
}
function modal_03() {
    Swal.fire({
        icon: 'success',
        title: 'Inicio finalizada',
        text: "Se ah iniciado sesión con éxito!",
        showConfirmButton: true,
        confirmButtonText: '<a style="color: white; text-decoration: none;" class="inicio" href="#">Aceptar</a>',
        confirmButtonColor: '#3085d6',
        allowOutsideClick: false
    });    
}