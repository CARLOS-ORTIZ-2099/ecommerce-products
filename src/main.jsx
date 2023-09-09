
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextoFuncion } from './context/Contexto.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <ContextoFuncion> 
        <App />
    </ContextoFuncion>
)
