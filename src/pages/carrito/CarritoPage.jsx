/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { alertConfirmation } from "../../helpers/alertConfirmation"
import { ProductsContext } from "../../context/ProductsContext"
import { CarritoVacio } from "./CarritoVacio"
import { TemplateCarritoProduct } from "./TemplateCarritoProduct"


export const CarritoPage = () => {
    const { carrito, setCarrito } = useContext(ProductsContext)
    const [totalPay, setTotalPay] = useState(0)
   // console.log(carrito)
 
useEffect(() => {
    let total =  carrito.reduce((a, b) => a + b.total, 0)
    //console.log(total)
    setTotalPay(total)
    localStorage.setItem('data',JSON.stringify(carrito))
}, [totalPay,carrito])


const deleteProduct = (id) => {
   // console.log(id)
    alertConfirmation(id,carrito,setCarrito)
}

const mas = (id) => {
    //console.log(id)
    let product = carrito.map(e => e.id== id 
                ?{...e,quantity:e.quantity+1,total:(e.quantity+1)*e.price}
                :e)
    setCarrito(product)
}

const menos = (id) => {
    let product = carrito.map(e => e.id== id && e.quantity > 1 
                ? {...e,quantity:e.quantity-1,total:(e.quantity-1)*e.price}
                :e)
    setCarrito(product)
}

  return (
     <>
        {   
            totalPay <=0 ? <CarritoVacio/> 
                : <TemplateCarritoProduct funciones={{mas, menos, deleteProduct}} totalPay={totalPay}/>     
        }
    </>
  )
}
