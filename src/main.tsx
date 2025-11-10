import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Renderiza la aplicación React en el elemento con id 'root' en el archivo HTML. Lo hace utilizando 
// el modo estricto de React para ayudar a identificar problemas potenciales en la aplicación.
// Ademas utiliza App que no es mas que el componente principal de la aplicacion. (recordar que react es basado en componentes)
// para este caso App.tsx es el componente principal, que contiene la estructura y logica de la aplicacion. (ver App.tsx)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
