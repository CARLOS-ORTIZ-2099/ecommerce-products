/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { alertProductAdd } from "../../helpers/alertProductAdd"
import './producto-info.css'
import { ProductsInfoTemplate } from "../../components/info-products/ProductsInfoTemplate"
import { ProductsContext } from "../../context/ProductsContext"

export const ProductoInfo = () => {

  const {id} = useParams()
  const {carrito, setCarrito, copyData} = useContext(ProductsContext)
  const [product, setProduct] = useState([])
  const [number, setNumber] = useState(0)
  
  useEffect(() => {
    let findProduct = copyData.find(product => product.id == id)
   // console.log(findProduct)
    setProduct(findProduct)
  }, [id])

  useEffect(() => {
      localStorage.setItem('data',JSON.stringify(carrito))
  }, [carrito])

  const more = () => setNumber((previus) => previus + 1 )

  const less = () => {
    setNumber((previus) => previus - 1 )
    if(number <=1){
      setNumber(0)
    }
  }

  const addProduct = (id) => {
   // console.log(id)
    if(carrito.every(product => product.id !== id) && number > 0){
      let shoop = copyData.find(product => product.id == id)
      console.log(shoop)
      setCarrito((previus) => [...previus, {...shoop,quantity:number,total:(shoop.price*number)} ] )
      alertProductAdd()
    }
    
    else if(carrito.some(e => e.id == id) && number > 0 ){
      let newCarr = carrito.map(product => product.id == id ? 
          {...product, quantity:product.quantity+number, total:(product.quantity+number)*product.price } 
          : product )
  
      setCarrito(newCarr)
      alertProductAdd()
    }
  }

  return (
    <div className="products-info-template-container min-vh-100">         
                <ProductsInfoTemplate 
                    product ={product} 
                    funciones = {{more, less, addProduct}} 
                    number={number}  />
    </div>
  )
}
