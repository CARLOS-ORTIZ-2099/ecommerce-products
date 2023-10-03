/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"


import { ContextoProducts } from "../../context/Contexto"
import { alertConfirmation } from "../../helpers/alertConfirmation"

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
        <>
              <h1>total a pagar : {totalPay}</h1>
            <div style={{display:'flex', flexWrap:'wrap',gap:'2rem'}}>
                {
                    carrito.map(ele => (
                        <div key={ele.id}>
                            <h1>{ele.name}</h1>
                            <img src={ele.image} alt="" style={{width:'200px'}}/> 
                                <h1>cantidad: {ele.quantity}</h1>
                                <h1>precio:  {ele.price}</h1>
                                <h1> total: {ele.total}</h1>
                            <button onClick={() => mas(ele.id)}>mas</button>
                            <button onClick={() => menos(ele.id)}>menos</button>
                            <br/>
                            <button onClick={() => deleteProduct(ele.id)} >eliminar</button>
                        </div>
                    ))
                }
            </div>
        </>
  )
}
