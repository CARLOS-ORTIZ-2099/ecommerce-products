import { Link } from "react-router-dom"
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer p-3">

    <div className="container text-center">
     <nav className="d-flex  justify-content-evenly">
         <Link href="https://facebook.com" ><i className="bi bi-facebook fs-3"></i></Link>
         <Link href="https://twitter.com" ><i className="bi bi-twitter fs-3"></i></Link>
         <Link href="https://github.com" ><i className="bi bi-github fs-3"></i></Link>
         <Link href="https://youtube.com" ><i className="bi bi-youtube fs-3"></i></Link>
         <Link href="https://instagram.com" ><i className="bi bi-instagram fs-3"></i></Link>
         <Link href="https://m.me/user" ><i className="bi bi-messenger fs-3"></i></Link>
         <Link href="https://api.whatsapp.com/send?phone=51904095788" ><i className="bi bi-whatsapp fs-3"></i></Link>
     </nav>
       <small className="text-white">&copy todos los derechos reservados  2023</small>
    </div>
 
 </footer>
  )
}
