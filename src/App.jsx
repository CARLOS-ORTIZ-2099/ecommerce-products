import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.css'
import { Menu } from './components/menu/Menu'
import { Home } from './pages/home-page/Home'
import { Productos } from './pages/product-pages/Productos'
import { ProductoInfo } from './pages/product-pages/ProductoInfo'
import { CarritoPage } from './pages/carrito/CarritoPage'
import { Footer } from './components/footer/Footer'



function App() {
  

  return (
    
      <BrowserRouter>
        <Menu/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              
              <Route path='/productos' element={<Productos/>}/>

              <Route path='/productos/:id' element={<ProductoInfo/>}/>

              <Route path='/carrito' element={<CarritoPage/>}/>  

          </Routes>
          <Footer/>
      </BrowserRouter>
  )
}

export default App
