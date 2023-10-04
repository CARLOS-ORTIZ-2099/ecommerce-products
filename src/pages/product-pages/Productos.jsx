import { data } from "../../helpers/data"
import '../../pages/../styles.css'
import './productos.css'
import { CardProducts } from "../../components/card-product/CardProducts"

export const Productos = () => {

  // renderizado de cada producto en la grilla 
  return (
    <div className="phather">
        <div className="productos-container">
            {
                data.map(producto => {
                    return (
                      <CardProducts key={producto.id} producto={producto}/>

                    )
                })
            }
        </div>
    </div>
  )
}
