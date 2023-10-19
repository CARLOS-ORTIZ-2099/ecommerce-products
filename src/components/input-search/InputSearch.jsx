/* eslint-disable react/prop-types */


export const InputSearch = ({buscarProductos}) => {
  return (
    <input className="mt-3" type="text" placeholder="buscar producto" onChange={buscarProductos}/>
  )
}
