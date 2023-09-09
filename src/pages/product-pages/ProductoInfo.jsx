import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { Contexto} from "../../context/Contexto"
import './productoInfo.css'

export const ProductoInfo = () => {
// capturando el parametro dinamico de cada producto
 const {id} = useParams()
 const [productoData, setProductoData] = useState('')
 const [numero, setNumero] = useState(0)
 const volver = useNavigate()

// trayendo del contexto los datos provenientes del proveedor
   let {carrito, setCarrito, copy} = useContext(Contexto)
   console.log(carrito)


 /*  creando un efecto, que se renderizara cada que carge el componente o cada que el parametro dinamico del id cambie, la logica es que debera buscar en la base de datos el producto
     que tenga el mismo id del parametro dinamico, si lo encuentra seteara el estado con ese valor para su posterior renderizado 
*/
 useEffect(() => {
    let info = copy.find(producto => producto.id == id)
   // console.log(info)
    setProductoData(info? info : null)

 }, [id])

 const volverCatalogo = () => {
    volver('/productos')
 }




 const masProductos = () => {
    setNumero((previus) => previus + 1)
 }

// aplicando logica para la disminucion de productos, esto evita que el usuario pueda cambiar a negativos
 const menosProductos = () => {
    setNumero((previus) => previus - 1)
    if(numero <=0){
        setNumero(0)
    }
 }

/* logica para añadir productos: si en el carito no hay ningun producto con el id que se le pasa como parametro a la funcion y el estado de cantidad numero es mayor que 0
   se seteara el estado con los valores previos del estado y las propiedades de result con las propiedades que se le indican modificadas */ 
const añadirProducto = (id) => {
   if(carrito.every(producto => producto.id !== id) && numero > 0){

      let result =  copy.find(elemento => elemento.id == id)
        setCarrito((previus) => [...previus,{...result,'quantity':result.quantity+numero, 'total': result.quantity+numero*result.price} ])
        console.log(carrito)
   }
/* si hay algun producto que ya este en el carrito de compras y el usuario quiera volver a seleccionarlo en vez de crear un nuevo registro, modificaremos el producto con la nueva cantidad
   para eso encontramos la posicion de dicho elemento y al elemento como tal, hacemos una copia del estado del carrito, a esa copia le aplicamos el splice le damos el indice del elemento
   a partir del cual vamos a eliminar, cuantos valores eliminaremos y por que valor lo sustituiremos en este caso sera una verison modficada en cantidad y precio del producto que se vuelva
   a seleccionar, finalmente seteamos el valor del carrito con ese valor modificado*/
   else if(carrito.some(producto => producto.id == id) && numero > 0){
    let indice =  carrito.findIndex(elemento => elemento.id == id)
    let elemento = carrito.find(elemento => elemento.id == id)                  
        
        console.log(indice)
        console.log(elemento)

        let copiaCarrito = [...carrito]
        copiaCarrito.splice(indice,1,{...elemento,'quantity':elemento.quantity+numero, 'total': (elemento.quantity+numero)*elemento.price})
        setCarrito(copiaCarrito)  
   }
}


  return (
    <div className="producto-principal">
           {
            !productoData ? <h1>no hay data</h1>:
            <>
                  <div className="textos">
                     <h1>{productoData.name}</h1>
                     <img src={productoData.image} alt="" />
                     <div className="parrafo">
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sunt molestias alias temporibus tenetur voluptas maiores, libero impedit minus, et 
                        placeat est voluptatum quo sapiente molestiae cum commodi, exercitationem fuga!</p>
                     </div>

                     <h3>seleccionar productos</h3>
                  </div>

                   <div className="buttons">
                        <button onClick={menosProductos}>menos</button> 
                           <span>{numero}</span>
                        <button onClick={masProductos}>mas</button><br/>
                        <button onClick={() => añadirProducto(productoData.id)}>añadir al carrito</button>
                     
                        <button onClick={volverCatalogo}>regresame al catalogo</button>
                   </div>
            </>
           }
    </div>
  )
}
