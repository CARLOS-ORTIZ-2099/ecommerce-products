import Swal from "sweetalert2";

export const alertProductAdd = () => {
    Swal.fire({
        position:"bottom-end",
        title: 'Producto añadido al carrito',
       /*  html: '<h1>sigue explorando el catalogo</h1>', */
        timer: 1000,
        timerProgressBar: true,
        allowOutsideClick:false, // con esto evito que el usuario haga click afuera
        allowEscapeKey:false, // con esto evito que el usuario pueda salir de la alerta con la tecla key
        showConfirmButton:false, // boton de confirmar, si esta en false no se mostrara
        icon: 'success'
      })
    
}