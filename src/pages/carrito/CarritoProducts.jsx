/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react'
import './carrito-products.css'
import { ContextoProducts } from '../../context/Contexto'

export const CarritoProducts = ({totalPay, carrito, funciones}) => {
const {mas, menos, deleteProduct} = funciones
const {setCarrito} = useContext(ContextoProducts)
let iva = carrito.length*2

const buy = () => {
    alert('gracias por tu compra')
    setCarrito([])
    
}


useEffect(() => {
    localStorage.setItem('data',JSON.stringify(carrito))
  }, [carrito])

  return (
        <div className='container mt-5 pt-5 border border-5 border-success'>
            <div className="pt-5 min-vh-100 row ">

                    {/* seccion productos del carrito */}
                    <div className="products-cart-container col-12 col-lg-7 ">
                        {
                            carrito.map(ele => (
                                <div className='products-cart container mb-4 border border-primary rounded-2 ' key={ele.id}>
                                            <div className='row'>
                                                    <div className='col-7'>
                                                        <h1 className='fs-5 text-truncate w-70 text-primary-emphasis'>{ele.name}</h1>
                                                        <img src={ele.image} alt="" style={{width:'120px'}}/> 
                                                    
                                                    
                                                    </div>
                                                    
                                            
                                                    <div className='col-5'>
                                                        <h2 className='fs-6'>Precio: <b className='text-success'>{ele.price}$</b></h2>
                                                        <h2 className='fs-6'> Total: <b className='text-success-emphasis'> {ele.total}$</b></h2>
                                                       
                                                        <div className='mt-4'>
                                                            <i className="bi bi-plus-circle text-primary" onClick={() => mas(ele.id)}></i>

                                                            <h2 className='fs-6 d-inline'>{ele.quantity}</h2>
                                                            
                                                            <i className="bi bi-dash-circle text-primary" onClick={() => menos(ele.id)}></i>
                                                            
                                                            <i className="bi bi-trash3-fill text-danger-emphasis" onClick={() => deleteProduct(ele.id)}></i>
                                                        </div>

                                                    </div>

                                            </div>
                                      
                                      </div>
                                        
                                        
                              
                            ))
                        }
                        
                    </div>

                    {/* seccion total a pagar */}
                    <div className='col-12 col-lg-5 p-3 total-pay-container'>
                        
                            <div className='child-fixed'>
                                    <div className='mb-4'>
                                        <input className='' type="button" value='Aplicar'/> 
                                        <input className='' type="text" placeholder='cupon'/>
                                    </div>

                                    <h2 className='text-success-emphasis'>Sub Total <b>{totalPay}$</b></h2>
                                    <h2 className='text-danger'>Descuento: 0$</h2>
                                    <h3 className='text-info-emphasis'>IVA: {iva}</h3>
                                    <h1 className="mt-5 mb-4 text-success">Total A Pagar : {totalPay+iva}$</h1>      
                                    <button type="button" className="btn btn-primary" onClick={buy}>Comprar</button>
                            </div>
                            
                    </div>

            </div>

        </div>
  )
}
