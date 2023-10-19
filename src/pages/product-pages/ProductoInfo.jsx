import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductsInfoTemplate } from "../../components/infoProducts/ProductsInfoTemplate"
import { ContextoProducts } from "../../context/Contexto"
import { alertProductAdd } from "../../helpers/alertProductAdd"
import './producto-info.css'

export const ProductoInfo = () => {

  const {id} = useParams()
  const {carrito, setCarrito, copyData} = useContext(ContextoProducts)
  const [product, setProduct] = useState([])
  const [number, setNumber] = useState(0)
console.log(copyData)
  useEffect(() => {
    let findProduct = copyData.find(ele => ele.id == id)
    console.log(findProduct)
    setProduct(findProduct)
    
  }, [id])

    useEffect(() => {
      localStorage.setItem('data',JSON.stringify(carrito))
    }, [carrito])


  const more = () => {
      setNumber((previus) => previus + 1 )
  }

  const less = () => {
    setNumber((previus) => previus - 1 )
    if(number < 1){
      setNumber(0)
    }
  }

  const addProduct = (id) => {
    console.log(id)
    let [shoop] = copyData.filter(ele => ele.id == id)
    console.log(shoop)

    if(carrito.every(e => e.id !== id) && number > 0){
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
                    product ={{...product}} 
                    funciones = {{more, less, addProduct}} 
                    number={number}  />
    </div>
  )
}
