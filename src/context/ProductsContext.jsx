/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { data } from "../helpers/data";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const guardarData = localStorage.getItem("data");
    //console.log(guardarData)
    if (guardarData) {
      return JSON.parse(guardarData);
    } else {
      return [];
    }
  });

  let copyData = data;

  const dataProducts = { copyData, carrito, setCarrito };

  return (
    <ProductsContext.Provider value={dataProducts}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
