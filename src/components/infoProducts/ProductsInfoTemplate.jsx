/* eslint-disable react/prop-types */
export const ProductsInfoTemplate = ({data,funciones,number}) => {
    console.log(data)
    console.log(funciones)
    console.log(number)

  return (
    <div>
              <h1>{data.name}</h1>
                  <img src={data.image} alt="" style={{width:'200px'}} />

                  <p>{data.price}$</p>

                  <button onClick={funciones.more}>mas</button>
                    <b>{number}</b>
                    
                  <button onClick={funciones.less}>menos</button>
                  <br/>
                  <button onClick={() => funciones.addProduct(data.id)}>añadir</button>

                  <div>
                    {
                      data?.gallery?.map((imagen, index) => (
                        <div key={index}>
                             <img  src={`${imagen.img}`} alt="" />
                        </div>
                      ))
                    }
                  </div>
    </div>
  )
}
