/* eslint-disable react/prop-types */
import { GalleryProduct } from '../gallery-product/GalleryProduct'
import './products-info-template.css'

export const ProductsInfoTemplate = ({product,funciones,number}) => {
/*     console.log(product)
    console.log(funciones)
    console.log(number) */

  return (
    <div className="container-info">
              <div className='container'>
                    <div className='textos'>
                      <h1>{product.name}</h1>
                          <img src={product.image} alt="" className='img-principal' />
                          <small>
                          <p className='fw-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eos incidunt adipisci, ea magnam eligendi rem, provident nam praesentium aliquid velit. Debitis dolores ullam autem unde assumenda iusto ipsa aliquid!</p>
                          </small>

                          <p className='fs-1 fw-bold'>Precio: {product.price}$</p>

                         <div className='mt-5'>
                            <button className="btn btn-primary btn-lg more" onClick={funciones.more}> 
                                  <i className="bi bi-plus-circle"></i>
                            </button>
                          
                                <b className='fs-3 quantity' > {number}</b>
                                
                            <button className="btn btn-primary btn-lg less" onClick={funciones.less}>
                                  <i className="bi bi-dash-circle"></i>
                            </button>
                              
                              <button className="btn btn-primary btn-lg add" onClick={() => funciones.addProduct(product.id)}>añadir al carro</button>
                         </div>
                    </div>
                    
                    <GalleryProduct product={product}/>
                  
              </div>
    </div>
  )
}
