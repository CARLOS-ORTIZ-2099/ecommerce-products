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
        let posicion = carrito.findIndex(e => e.id == id)
        console.log(`posicion del elemento selecionado ${posicion}`)
        let productObject = carrito.find(e => e.id == id)
        console.log(productObject)
        
        let car = [productObject].map(e => {
          return {...e, quantity:e.quantity+number, total:(e.quantity+number)*e.price}
        })

        console.log(...car)
        let copy = [...carrito]
        copy.splice(posicion,1,...car)
        console.log(copy)
        setCarrito(copy)     
        alertProductAdd()
    }
  }

  return (
    <div className="products-info-template-container min-vh-100">         
                <ProductsInfoTemplate 
                    data ={{...product}} 
                    funciones = {{more, less, addProduct}} 
                    number={number}  />
    </div>
  )
}
