/* eslint-disable react/prop-types */
import "./random-products.css";
import { Link } from "react-router-dom";

export const RandomProducts = ({ auxiliar }) => {
  return (
    <section className="random-products-container">
      {auxiliar.slice(0, 4).map((product) => (
        <div key={product.id} className="random-product">
          <img
            src={`${product.image}`}
            /* className="img-fluid" */
            alt={`${product.name}`}
          />
          <div className="button">
            <Link
              to={`/productos/${product.id}`}
              className="btn btn-primary btn-sm"
            >
              ver mas
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
