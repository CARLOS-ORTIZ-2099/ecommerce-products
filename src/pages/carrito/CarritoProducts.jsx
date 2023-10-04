/* eslint-disable react/prop-types */

export const CarritoProducts = ({totalPay, carrito, funciones}) => {
const {mas, menos, deleteProduct} = funciones

  return (
    <div className="pt-5">
              <h1 className="mt-5">total a pagar : {totalPay}</h1>
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
        </div>
  )
}
