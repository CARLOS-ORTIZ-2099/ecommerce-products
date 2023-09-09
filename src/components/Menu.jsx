import './menu.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
      
           {/*  <nav>
                <Link to='/'>home</Link>
                <Link to='/productos'>productos</Link>
                <Link to='/sucursales'>sucursales</Link>
                <Link to='/carrito'>carrito</Link>
            </nav> */}

         
         <nav className="navbar navbar-expand-lg bg-body-primary row justify-content-around">
        
                    <div className="container-fluid ">
                        <Link className="navbar-brand " to='/'>Ecommerce</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 col">

                        <li className="nav-item">
                          <Link className="nav-link active " aria-current="page" to='/productos'>Productos</Link>
                        </li>
                    
                        <li className="nav-item ">
                       
                          <Link className='nav-link ' to='/sucursales'>Sucursales</Link>
                     
                        </li>

                        
                        <li className="nav-item">
                         <Link className='nav-link ' to='/carrito'>Carrito</Link>
                        </li>

                  </ul>
               
                </div>
              </div>
          </nav>
       





            
    </>
  )
}
