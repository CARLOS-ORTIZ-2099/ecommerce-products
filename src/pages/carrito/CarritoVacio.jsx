/* eslint-disable no-undef */
import shoppingCartImg from '../../assets/images/shopping-cart-empty.svg'
import { useNavigate } from "react-router-dom"

export const CarritoVacio = () => {

  const navigate = useNavigate()

  const back = () => {
    navigate('/productos')
  }

  return (
    <div className='min-vh-100 text-center pt-5'>
        <h1 className='pt-5 mt-5 text-info-emphasis'>Tu Carrito Esta Vacio</h1>
        <img className='mx-auto' src={shoppingCartImg} alt="" width={'200px'} />
        <button className='btn btn-primary d-block mx-auto mt-4' onClick={back}>Ir A Comprar</button>
    </div>
  )
}
