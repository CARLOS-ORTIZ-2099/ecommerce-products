import { Link } from 'react-router-dom'
import './carrusel.css'
import { useEffect, useState } from 'react';

export const Carrusel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleResize = () => {
       // console.log('estado cambiado');
        setWindowWidth(window.innerWidth);
    }
   // console.log('ejecutando efecto 1 ');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
   // console.log(windowWidth);
   // console.log('ejecutando efecto 2 ');
    windowWidth <= 500 ? setImageSrc(true) : setImageSrc(false)
  }, [windowWidth]);

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
                        <Link to='/productos/1'>
                            <img src={imageSrc ? 'https://home.ripley.com.pe/minisitios/home/slider/24/05/06/7m.webp?v3' 
                            : 'https://home.ripley.com.pe/minisitios/home/slider/24/05/06/7.webp?v3'}
                                className="d-block w-100"
                                alt="..." 
                            />
                        </Link>
                    </div>

                    <div className="carousel-item">
                        <Link to='/productos/2'>
                            <img src={imageSrc ? 'https://home.ripley.com.pe/minisitios/home/slider/24/05/06/2m.webp?v2' 
                            : 'https://home.ripley.com.pe/minisitios/home/slider/24/05/06/2.webp?v2'}
                            className="d-block w-100"
                            alt="..." 
                            />
                        </Link>
                    </div>
                    
                    <div className="carousel-item">
                        <Link to='/productos/3'>
                            <img src={imageSrc ? 'https://home.ripley.com.pe/minisitios/home/slider/24/05/06/4m.webp?v01' 
                            : 'https://home.ripley.com.pe/minisitios/home/slider/24/05/06/4.webp?v01'}
                            className="d-block w-100"
                            alt="..." />
                        </Link>
                    </div> 

                    <div className="carousel-item">
                        <Link to='/productos/8'>
                        <img src={imageSrc ? 'https://home.ripley.com.pe/minisitios/home/slider/24/05/06/8m.webp?v01' 
                            : 'https://home.ripley.com.pe/minisitios/home/slider/24/05/06/8.webp?v01'}
                            className="d-block w-100"
                            alt="..." />
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
