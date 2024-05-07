import { data } from "./data"

console.log(data);
export function aleatorios(){
    const arreglo = []
    while(arreglo.length <= 3){
      let random =  Math.floor(Math.random()*data.length)
      if(!arreglo.includes(random)){
        arreglo.push(random)
      }
      
    }
    
    const products = arreglo.map((numero) => {
        return data.find((product, index) => index == numero)
      })

    return products
    
}
aleatorios()