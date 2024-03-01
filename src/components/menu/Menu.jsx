import { Link, NavLink } from 'react-router-dom'
import './menu.css'

export const Menu = () => {
  return (
    <>
              <nav className="navbar bg-success fixed-top">
                  <div className="container">

                        <Link className="navbar-brand fw-bold" href="#" to='/'>
                              <img src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png" alt="Logo"  className="d-inline-block align-text-top"/>
                              AmaStore
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
