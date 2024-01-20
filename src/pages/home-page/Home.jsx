import { useContext, useEffect, useState } from "react"
import { Carrusel } from "../../components/carrusel/Carrusel"
import { aleatorios } from "../../helpers/productosAlatorios"
import { ProductsContext } from "../../context/ProductsContext"
import { RandomProducts } from "../../components/randomProducts/RandomProducts"
import { SectionCategories } from "../../components/sectionCategories/SectionCategories"



export const Home = () => {
  const [auxiliar, setAuxiliar] = useState([])
  const {carrito} = useContext(ProductsContext)


  useEffect(() => {
    const randomProductsData = aleatorios();
    setAuxiliar(carrito.length > 1 ? carrito : randomProductsData)
  }, [carrito])

 
  return (

      <div className="pt-5 border  border-primary min-vh-100">

         <Carrusel/>
         <SectionCategories/>
         <h2 className="text-center text-capitalize text-primary mt-5">{carrito.length > 1 ? 'seguir comprando' : 'ultimas tendencias'}</h2>
         <RandomProducts auxiliar={auxiliar}/>
      </div>

  )
}
