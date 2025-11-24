import Cabecera from './Cabecera'
import Estudios from './Estudios'
import Experiencia from './Experiencia'
import Perfil from './Perfil'
import FotoPerfil from './foto_perfil'
import Tecnologias from './StackTecnologias'
import './App.css'
function App() {


  return (
    <>
      <div className="cv-container">
        <div className="left-section">
          <FotoPerfil />
          <Cabecera />
          <Perfil />
        </div>

        <div className="right-section">
          <Experiencia />
          <Estudios />
        <Tecnologias />
        </div>
      </div>

    </>
  )
}

export default App
