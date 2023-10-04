/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import './card-products.css'

export const CardProducts = ({producto}) => {

  return (

    <div className="card text-center" >
            <img src={`${producto.image}`} className="card-img-top" alt={`${producto.name}`}/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the .</p>
                <Link to={`/productos/${producto.id}`} className="btn btn-primary">ver mas</Link>
            </div>
    </div>
    
  )
}
