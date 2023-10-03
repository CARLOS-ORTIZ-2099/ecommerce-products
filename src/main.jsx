
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Contexto } from './context/Contexto.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <Contexto> 
        <App />
    </Contexto>
)
