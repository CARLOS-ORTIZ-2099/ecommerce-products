/* eslint-disable react/prop-types */
import './modal.css'

export const Modal = ({imagenState, nextImage, previusImage, setIndice}) => {

    const hiddenModal = () => {
        setIndice(null)
    }

  return (
    
    <div  className='modal-custom'>
      

        <img className="img-fluid" src={`${imagenState.img}`} alt="" />
        <div>
            <i className='previus bi bi-arrow-left-circle-fill fs-1' onClick={previusImage}></i>
            <i className='next bi bi-arrow-right-circle-fill fs-1' onClick={nextImage}></i>
        </div>
        <i className='close bi bi-x-circle-fill fs-1' onClick={hiddenModal}></i>
       
    </div>

  )


}
