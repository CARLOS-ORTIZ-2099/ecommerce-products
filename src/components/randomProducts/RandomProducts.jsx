/* eslint-disable react/prop-types */
import './random-products.css'
import { Link } from "react-router-dom"

export const RandomProducts = ({auxiliar}) => {
  return (
    <section className="random-products-container">
        {
            auxiliar.slice(0,5).map((product) => (
                <div key={product.id} className="random-product" >
                    <img  src={`${product.image}`} className=" img-fluid" alt={`${product.name}`}/>
                    <div className="">
                       {/*  <h5>{product.name}</h5> */}
                        <Link to={`/productos/${product.id}`} className="btn btn-primary btn-sm">ver mas</Link>
                    </div>
                </div>
            ))
        }
    </section>
  )
}
