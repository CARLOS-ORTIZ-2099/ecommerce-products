import shoes from '../../assets/images/shoes.svg'
import technologies from '../../assets/images/technologies.svg'
import accessories from '../../assets/images/accessories.svg'
import videogames from '../../assets/images/videogames.svg'
import textil from '../../assets/images/textil.svg'
import fitness from '../../assets/images/fitness.svg'
import './section-categories.css'

export const SectionCategories = () => {
  return (
   <>
    <h2 className='title-categories text-capitalize mt-3 text-primary'>miles de categorias te esperan</h2>
        <section className='categories-container'>
            <div>
                <img src={shoes}className='img-fluid' alt="" />
                <p>calzado</p> 
            </div>
            <div>
                <img src={technologies} className='img-fluid' alt="" />
                <p>tecnologia</p> 
            </div>
            <div>
                <img src={accessories} className='img-fluid' alt="" />
                <p>accesorios</p> 
            </div>
            <div>
                <img src={videogames} className='img-fluid' alt="" />
                <p>videojuegos</p> 
            </div>
            <div>
                <img src={textil} className='img-fluid' alt="" />
                <p>textil</p> 
            </div>
            <div>
                <img src={fitness} className='img-fluid' alt="" />
                <p>deportes</p> 
            </div>
        </section>
   </>
  )
}
