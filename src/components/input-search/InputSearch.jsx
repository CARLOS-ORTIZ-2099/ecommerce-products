/* eslint-disable react/prop-types */


export const InputSearch = ({buscarProductos, refInput}) => {
  return (
    <input ref={refInput}  className="mt-3" type="text" placeholder="buscar producto" 
      onChange={buscarProductos}/>
  )
}
