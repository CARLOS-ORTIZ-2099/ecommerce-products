/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './gallery-product.css'


export const GalleryProduct = ({product}) => {
    
    const [imagenS, setImagen] = useState([])
    const [valor, setValor] = useState(null)

    const showModal = (imagen, indice) => {
        setValor(indice)
        setImagen(imagen)
        console.log(indice, imagen)
    }


  return (

            <>

                <div className='gallery-container'>
                    {
                    product?.gallery?.map((imagen, index) => (
                        <div key={index}>
                            <img onClick={() => showModal(imagen, index)} className='img-modal' src={`${imagen.img}`} alt="" />
                        </div>
                    ))
                    }
                </div> 

  
                    {
                        valor && <div>
                                <img src={`${imagenS.img}`} alt="" />
                        </div>
                    }
            </>
    
  )
}
