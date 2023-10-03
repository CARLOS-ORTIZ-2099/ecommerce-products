import Swal from "sweetalert2";

export const alertConfirmation = (id, carrito, setCarrito) => {
    Swal.fire({
      title:'eliminar',
      text:'estas seguro de eliminar este producto?',

      icon:'question',

      confirmButtonText:'aceptar',
      confirmButtonColor:'green',

      showCancelButton:true,
      cancelButtonText:'cancelar',
      cancelButtonColor:'red',
      allowOutsideClick:false, 
      allowEscapeKey:false, 
    }).then((result)=> {
      console.log(result)
      if(result.isConfirmed){
          console.log(result.isConfirmed)
          Swal.fire('Éxito', 'El producto ha sido eliminado del carrito de compra correctamente', 'success');
          const filtrado = carrito.filter(product => product.id!== id)
          setCarrito(filtrado)
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
          console.log(result.dismiss)
          console.log(Swal.DismissReason)
          Swal.fire('Error', 'La eliminación ha sido cancelada', 'error');
      }
      
  })
}

/* let filtrado = carrito.filter(e => e.id !== id)
console.log(filtrado)
setCarrito(filtrado) */