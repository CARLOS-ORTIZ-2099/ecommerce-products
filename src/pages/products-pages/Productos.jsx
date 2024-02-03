import { data } from "../../helpers/data"
import '../../pages/../styles.css'
import './productos.css'
import { CardProducts } from "../../components/card-product/CardProducts"
import { useRef, useState } from "react"
import { Select } from "../../components/select/Select"
import { InputSearch } from "../../components/input-search/InputSearch"
import { NotFoundProduct } from "../../components/not-found-product/NotFoundProduct"


export const Productos = () => {
  const refSelect = useRef()
  const refInput = useRef()
  const [dataProducts, setDataProducts] = useState(data)
  const [notfound, setNotFound] = useState(false)

  const buscarProductos = (e) => {
    let name = e.target.value
    if(refSelect.current.value !== 'ALL'){
      refSelect.current.value = 'ALL'
    }
    let filterProducts = data.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    setDataProducts(filterProducts)
    filterProducts.length < 1 ? setNotFound(true) : setNotFound(false)
  }

  const select = (e) => {
    let category = e.target.value
    if(refInput.current.value != ''){
       refInput.current.value = ''
    }
    if(category == 'ALL'){
      setDataProducts(data)
      return
    }
    let filterProducts = data.filter(product => product.category.toLowerCase() == category.toLowerCase())
    setDataProducts(filterProducts)
  } 
  // renderizado de cada producto en la grilla 
  return (
    <div className="phather">
        <div className="container d-flex justify-content-around flex-wrap">
          <InputSearch  buscarProductos={buscarProductos} refInput={refInput}/>
          <Select select={select} refSelect = {refSelect}/>
        </div>
        {
          notfound ? <NotFoundProduct/> :
      
          <div className="productos-container">
              {
                  dataProducts.map(producto => {
                      return (
                        <CardProducts key={producto.id} producto={producto}/>
                      )
                  })
              }
          </div>
        } 
    </div>
  )
}
