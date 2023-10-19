import { data } from "../../helpers/data"
import '../../pages/../styles.css'
import './productos.css'
import { CardProducts } from "../../components/card-product/CardProducts"
import { useState } from "react"
import { Select } from "../../components/select/Select"
import { InputSearch } from "../../components/input-search/InputSearch"


export const Productos = () => {
const [dataProducts, setDataProducts] = useState(data)

  const buscarProductos = (e) => {
    let name = e.target.value
    if(name.length < 1){
      setDataProducts(data)
      return
    }

    let copyData = [...data]
    let filterProducts = copyData.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    setDataProducts(filterProducts)

  }

  const select = (e) => {
    let category = e.target.value
    if(category == 'ALL'){
      setDataProducts(data)
      return
    }
    let copyData = [...data]
    let filterProducts = copyData.filter(product => product.category.toLowerCase().includes(category.toLowerCase()))
    setDataProducts(filterProducts)
  } 


  // renderizado de cada producto en la grilla 
  return (
    <div className="phather">
        <div className="container d-flex justify-content-around flex-wrap">
          <InputSearch  buscarProductos={buscarProductos}/>
          <Select select={select}/>
        </div>
       

        <div className="productos-container">
            {
                dataProducts.map(producto => {
                    return (
                      <CardProducts key={producto.id} producto={producto}/>

                    )
                })
            }
        </div>
    </div>
  )
}
