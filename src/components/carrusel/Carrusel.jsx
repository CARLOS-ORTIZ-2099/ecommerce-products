import { Link } from 'react-router-dom'
import './carrusel.css'

export const Carrusel = () => {
  return (
    <section id="carrusel" className="mt-2">

            <div id="carouselExampleIndicators" className="carousel slide pt-5">

                <div className="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>

                <div className="carousel-inner">

                <div className="carousel-item active">
                    <Link to='/productos/2'>
                    <img src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw08bd2ee4/marketing/imagenes/zapatillas/banner_landing_zapatillas_27ago23.jpg" className="d-block w-100" alt="..."/>
                    </Link>
                </div>

                <div className="carousel-item">
                    <Link to='/productos/1'>
                        <img src="https://home.ripley.com.pe/minisitios/home/huincha/23/10/02/webp/4.webp?v1" className="d-block w-100" alt="..."/>
                    </Link>
                </div>

                <div className="carousel-item">
                    <Link to='/productos/8'>
                        <img src="https://home.ripley.com.pe/minisitios/home/huincha/23/10/02/webp/2.webp" className="d-block w-100" alt="..."/>
                    </Link>
                </div>

                <div className="carousel-item">
                    <Link to='/productos/6'>
                        <img src="https://home.ripley.com.pe/minisitios/home/huincha/23/10/02/webp/5.webp" className="d-block w-100" alt="..."/>
                    </Link>
                </div>

                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">

                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>

                </button>


                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>


            </div>

    </section>
  )
}
