/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { data } from "../helpers/data"

export const Contexto = createContext()


// creando una funcion que retornara un wrapper, este wrapper cubrira toda mi aplicacion
export const ContextoFuncion = ({children}) => {

  // creando estado para los productos que se almacenaran en el carrito
  const [carrito, setCarrito] = useState([])

  // haciendo una copia del archivo json y asignandola a la variable copy del estado
  const [copy, setCopy] = useState(data.map(element => ({ id: element.id, quantity: 0 ,price:element.price,total:0,name:element.name,image:element.image})))

  const dataFile = {carrito,setCarrito, copy, setCopy}

  return (

    // al proveedor le pasamos los dtaos que proveera, y estos son el estado y la funcion que cambia el estado del carrito, y de la copia del json

    <Contexto.Provider value={dataFile}>
        {children}
    </Contexto.Provider>

  )

}
