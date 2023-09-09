import { useContext } from "react"
import { Contexto } from "../../context/Contexto"
import './carritopage.css'

export const CarritoPage = () => {
  let {carrito, setCarrito}  = useContext(Contexto)

console.log(carrito)

// haciendo la sumatoria del carrito
let totalPagar = carrito.reduce((elementoA, elementoP) => elementoA + elementoP.total,0) 
console.log(totalPagar)

// haciendo el filtro de productos eliminados del carrito
const eliminar = (id) => {
  let modificado = carrito.filter(elemento => elemento.id!== id)
  setCarrito(modificado)
}


const mas = (id) => {
 
    const result = carrito.map((element => {
         if(element.id == id){
             return {...element, 'quantity':element.quantity+1,'total':element.price*(element.quantity+1)}
         }
         else return element
 
     })) 
     
     setCarrito(result)
}

const menos = (id) => {
  const result = carrito.map((element => {
       if(element.id == id && element.quantity >= 2){
           return {...element, 'quantity':element.quantity-1,'total':element.price*(element.quantity-1)}
       }
       else return element

   })) 
   setCarrito(result)
}


  return (
    <>
      {totalPagar}
      <div className="carrito-container">
        
        {
          carrito.map(elemento => {
            return <div key={elemento.id}>
                  <h1>{elemento.name}</h1>
                  <img src={elemento.image} alt="" />
                  <h2>precio:  {elemento.price}</h2>
                  <h2>cantidad:{elemento.quantity}</h2>
                  <h1> <strong>{elemento.total}</strong></h1>
                {  <button onClick={() => menos(elemento.id)}>menos</button>}
              
                  <button onClick={() => mas(elemento.id)}>mas</button><br/>
                  <button onClick={()=> eliminar(elemento.id)}>eliminar</button>
            </div>
          })
        }
          
      </div>
    </>
  )
}
