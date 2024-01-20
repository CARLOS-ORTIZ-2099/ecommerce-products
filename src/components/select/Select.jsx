/* eslint-disable react/prop-types */


export const Select = ({select, refSelect}) => {
  return (
    <select ref={refSelect} className="mt-4"  id="category" name="category" onChange={select}> 

        <option value="ALL">ALL</option>
        <option value="tecnologia">tecnologia</option>
        <option value="calzado">calzado</option>
        <option value="fitnes">fitnes</option>
        <option value="accesorios">accesorios</option>
        <option value="videojuegos">videojuegos</option>
        <option value="textil">textil</option>
    
    </select>
  )
}
