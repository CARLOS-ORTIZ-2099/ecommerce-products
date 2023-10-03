import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.css'
import { Menu } from './components/Menu'
import { Home } from './pages/home-page/Home'
import { Sucursales } from './pages/sucursales-page/sucursales'
import { Productos } from './pages/product-pages/Productos'
import { ProductoInfo } from './pages/product-pages/ProductoInfo'
import { CarritoPage } from './pages/carrito/CarritoPage'

function App() {
  

  return (
    
      <BrowserRouter>
        <Menu/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/sucursales' element={<Sucursales/>}/>
              
              <Route path='/productos' element={<Productos/>}/>

              <Route path='/productos/:id' element={<ProductoInfo/>}/>

              <Route path='/carrito' element={<CarritoPage/>}/>  

          </Routes>
      </BrowserRouter>
  )
}

export default App
