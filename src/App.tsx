import Cabecera from './Cabecera'
import Estudios from './Estudios'
import Experiencia from './Experiencia'
import Perfil from './Perfil'
import FotoPerfil from './foto_perfil'
import Tecnologias from './StackTecnologias'
import { habilidadesData } from "./data"
import ToggleHabilidades from "./ToggleHabilidades"

import './App.css'

function App() {

  return (
    <>
      <div className="cv-container">

        <div className="left-section">
          <FotoPerfil />
          <Cabecera />
          <Perfil />

          {/* Habilidades que vienen desde data */}
          <ToggleHabilidades habilidades={habilidadesData} />
        </div>

        <div className="right-section">
          <Experiencia />
          <Estudios />

          {/* Aquí insertas el renderizado de tecnologías */}
          <Tecnologias />
        </div>

      </div>
    </>
  )
}

export default App
