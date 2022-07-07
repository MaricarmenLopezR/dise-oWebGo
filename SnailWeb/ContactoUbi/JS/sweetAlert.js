function modal_01() {
    Swal.fire({
        icon: 'success',
        title: 'Contacto finalizada',
        text: "Envio realizado con éxito!",
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
        allowOutsideClick: false
    });    
}


function modal_02() {
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
