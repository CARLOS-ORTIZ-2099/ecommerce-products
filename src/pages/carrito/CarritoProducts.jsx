/* eslint-disable react/prop-types */

import './carrito-products.css'

import { CarritoVacio } from './CarritoVacio'
import { TemplateCarritoProduct } from './TemplateCarritoProduct'

export const CarritoProducts = ({totalPay, funciones}) => {




  return (
        <>
            {   
                totalPay<=0 ? <CarritoVacio/> 
                    : <TemplateCarritoProduct funciones={funciones} totalPay={totalPay}/>
                
            }

        </>
  )
}
