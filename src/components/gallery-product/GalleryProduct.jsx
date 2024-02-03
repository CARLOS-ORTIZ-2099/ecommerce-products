/* eslint-disable react/prop-types */
import { useState } from 'react'
import './gallery-product.css'
import { Modal } from './Modal'

export const GalleryProduct = ({product}) => {
    console.log(product)
    const [imagenState, setImagenState] = useState([])
    const [indice, setIndice] = useState(null)

 // logica para mostrar el modal
const showModal = (imagen, indice) => {
    setIndice(indice)
    setImagenState(imagen)
}

 // logica para ocultar el modal
const closeModal = () => setIndice(null)

// logica para rotar las imagenes a la derecha

const nextImage = () => {
    let sum = indice + 1 
    let productLength = product.gallery.length 
  // cuando sum sea mayor que la cantidad de imagenes en la galeria ejecutara algo
    if(sum  > productLength-1){
      let cero = 0
      let result = product.gallery.find((ele, index) => index == cero)
      setImagenState(result)
      setIndice(cero)
      return
    }
  // siempre y cuando sum sea menor que la cantidad de imagenes en la galeria ejecutara algo
    let result = product.gallery.find((ele, index) => index == sum)
    console.log(result)
    setImagenState(result)
    setIndice(sum)

}

// logica para rotar las imagenes a la izquierda

const previusImage = () => {
    let less = indice - 1 
    let productLength = product.gallery.length 
  // cuando less sea menor que 0 ejecutara algo
    if(less  < 0){
      let result = product.gallery.find((ele, index) => index == productLength-1)
      setImagenState(result)
      setIndice(productLength-1)
      return
    }
  // siempre y cuando less sea mayor que 0 ejecutara algo
    let result = product.gallery.find((ele, index) => index == less)
    console.log(result)
    setImagenState(result)
    setIndice(less)
 
 }

  return (
      <>
        <div className='gallery-container'>
            {
              product?.gallery?.map((imagen, index) => (
                <div key={index}>
                  <img onClick={() => showModal(imagen, index)}className='img-modal'src={`${imagen.img}`}/>
                </div>
              ))
            }
        </div> 
        {
          indice !== null && 
          <Modal closeModal={closeModal} 
            imagenState={imagenState}
            nextImage= {nextImage}
            previusImage={previusImage}
          />
        }
      </>
  )
}
                       
/* import React, { useState } from 'react';
import './gallery-product.css';

export const GalleryProduct = ({ product }) => {
  const [valor, setValor] = useState(null);

  const showModal = (imagen, indice) => {
    setValor(indice);
  };

  const closeImage = () => {
    setValor(null); // Esto cierra la imagen al hacer clic en ella nuevamente
  };

  return (
    <>
      <div className="gallery-container">
        {product?.gallery?.map((imagen, index) => (
          <div key={index}>
            <img
              onClick={() => showModal(imagen, index)}
              className="img-modal"
              src={`${imagen.img}`}
              alt=""
            />
          </div>
        ))}
      </div>

      {valor !== null && (
        <div className="lightbox" onClick={closeImage}>
          <img src={`${product?.gallery?.[valor]?.img}`} alt="" />
        </div>
      )}
    </>
  );
}; */
