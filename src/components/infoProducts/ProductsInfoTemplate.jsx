/* eslint-disable react/prop-types */
import './products-info-template.css'

export const ProductsInfoTemplate = ({data,funciones,number}) => {
    console.log(data)
    console.log(funciones)
    console.log(number)

  return (
    <div className="container-info">
              <div className='container'>
                    <div className='textos'>
                      <h1>{data.name}</h1>
                          <img src={data.image} alt="" className='img-principal' />
                          <small>
                          <p className='fw-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eos incidunt adipisci, ea magnam eligendi rem, provident nam praesentium aliquid velit. Debitis dolores ullam autem unde assumenda iusto ipsa aliquid!</p>
                          </small>

                          <p className='fs-1 fw-bold'>Precio: {data.price}$</p>

                         <div className='mt-5'>
                            <button className="btn btn-primary btn-lg more" onClick={funciones.more}>+</button>
                                <b className='fs-3'> {number}</b>
                                
                              <button className="btn btn-primary btn-lg less" onClick={funciones.less}>-</button>
                              
                              <button className="btn btn-primary btn-lg add" onClick={() => funciones.addProduct(data.id)}>añadir</button>
                         </div>
                    </div>
                    

                    <div className='gallery-container'>
                      {
                        data?.gallery?.map((imagen, index) => (
                          <div key={index}>
                              <img  src={`${imagen.img}`} alt="" />
                          </div>
                        ))
                      }
                    </div>
              </div>
    </div>
  )
}
