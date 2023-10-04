/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"


import { ContextoProducts } from "../../context/Contexto"
import { alertConfirmation } from "../../helpers/alertConfirmation"
import { CarritoProducts } from "./CarritoProducts"

export const CarritoPage = () => {
    const {copyData, carrito, setCarrito} = useContext(ContextoProducts)
    const [totalPay, setTotalPay] = useState(0)
    console.log(carrito)
 
useEffect(() => {
    let total =  carrito.reduce((a, b) => a + b.total, 0)
    console.log(total)
    setTotalPay(total)
    localStorage.setItem('data',JSON.stringify(carrito))
}, [totalPay,carrito])


const deleteProduct = (id) => {
    console.log(id)
    alertConfirmation(id,carrito,setCarrito)
}

const mas = (id) => {
    console.log(id)
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
        <CarritoProducts totalPay = {totalPay} carrito= {carrito} funciones={{mas, menos, deleteProduct}}/>
  )
}
