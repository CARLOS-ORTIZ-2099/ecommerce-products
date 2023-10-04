/* import './menu.css' */
import { Link, NavLink } from 'react-router-dom'


export const Menu = () => {
  return (
    <>
      
           {/*  <nav>
                <Link to='/'>home</Link>
                <Link to='/productos'>productos</Link>
                <Link to='/sucursales'>sucursales</Link>
                <Link to='/carrito'>carrito</Link>
            </nav> */}

              <nav className="navbar bg-success fixed-top">
                  <div className="container">

                        <Link className="navbar-brand" href="#" to='/'>
                              <img src="https://gestionpyme.com/wp-content/uploads/2015/09/shutterstock_227788621.jpg" alt="Logo"  className="d-inline-block align-text-top"/>
                              OcCorp
                        </Link>

                        <button className="navbar-toggler" type="button"
                          data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" 
                          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            
                          <span className="navbar-toggler-icon"></span>
                          
                        </button>
                    
                        <div className="offcanvas  offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                              <div className="offcanvas-header">
                                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                    OcCorp
                                  </h5>

                                  <button  type="button" className="btn-close fs-3"
                                  data-bs-dismiss="offcanvas" aria-label="Close">
                                  </button>

                              </div>

                              <div className="offcanvas-body ">

                                  <ul className="border text-center  navbar-nav justify-content-start flex-grow-1 pe-3 mt-5">
                               
                                      <li className="nav-item  mb-5">
                                        <NavLink  className="fs-3 nav-link" 
                                          aria-current="page"
                                          to='/' 
                                          >Home</NavLink>
                                      </li>

                                      <li className="nav-item mb-5">
                                        <Link className="fs-3 nav-link" to='/productos'>productos</Link>
                                      </li>

                                      <li className="nav-item mb-5">
                                        <Link className="fs-3 nav-link" to='/sucursales'>sucursales</Link>
                                      </li>

                                      <li className="nav-item mb-5">
                                        <Link className="fs-3 nav-link" to='/carrito'>carrito</Link>
                                      </li>
                                    
                                  </ul>
                          
                              </div>

                        </div>
                    
                  </div>
              </nav>


            
    </>
  )
}
