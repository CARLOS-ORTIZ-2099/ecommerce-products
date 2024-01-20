import { useEffect, useState } from "react"
import { Carrusel } from "../../components/carrusel/Carrusel"
import { aleatorios } from "../../helpers/productosAlatorios"
import { Link } from "react-router-dom"


const randomProducts = aleatorios()
console.log(randomProducts);

export const Home = () => {
  const [auxiliar, setAuxiliar] = useState([])
  const [initialProducts, setInitialProducts] = useState(() => {
      const data = localStorage.getItem('data')
      console.log(data);
      if(data){
        return JSON.parse(data)
      }
      else{
        return []
      }
  })

  useEffect(() => {
    if(initialProducts && initialProducts.length > 1){
      setAuxiliar(initialProducts)
    }
    else {
      console.log(randomProducts);
      setAuxiliar(randomProducts)
    }
  }, [])

 
  return (

      <div className="pt-5 border  border-primary min-vh-100">

         <Carrusel/>
         <h2>{initialProducts.length > 1 ? 'seguir comprando' : 'ultimas tendencias'}</h2>
          <section style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1rem'}}>
          {
            auxiliar.map((product, index) => (
              index < 5 ? <div key={product.id} className=" text-center  " >
              <img  src={`${product.image}`} className="card-img-top img-fluid" alt={`${product.name}`}/>
              <div className="">
                  <h5 className="card-title">{product.name}</h5>
                  <Link to={`/productos/${product.id}`} className="btn btn-primary">ver mas</Link>
              </div>
              </div> : ''
            ))
          }
          </section>
              
      </div>

  )
}
