import { Link } from "react-router-dom"
import { data } from "../../helpers/data"
import './productos.css'

export const Productos = () => {

  // renderizado de cada producto en la grilla 
  return (
    <div className="phather">
        <div className="productos-container">
            {
                data.map(producto => {
                    return <div className="producto" key={producto.id}>
                            <h1>{producto.name}</h1>
                            <h2>{producto.price}</h2>
                              <div>
                              <img src={producto.image} alt="" />
                                <Link to={`/productos/${producto.id}`}>ver mas</Link>
                              </div>
                          </div>
                })
            }
      </div>
    </div>
  )
}
