import { data } from "./data"
export function aleatorios(){
    const arreglo = []
    while(arreglo.length <= 4){
      let random =  Math.floor(Math.random()*17)
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