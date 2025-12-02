import { useState } from "react"; //Componente para que permite manejar los eventos de formulario
import FormularioTecnologia from "./FormularioTecnologia"; //importa el componente de logica para el envio del formulario

export default function StackTecnologias() {
  const [tecnologias, setTecnologias] = useState<string[]>([]);//Estado local para almacenar la lista de tecnologías agregadas
  const [mostrarFormulario, setMostrarFormulario] = useState<boolean>(false); //Estado para controlar la visibilidad del formulario

  const agregarTecnologia = (nuevaTec: string) => { //Función que agrega una nueva tecnología a la lista
    setTecnologias([...tecnologias, nuevaTec]); //Agrega la nueva tecnología al array de tecnologías
    setMostrarFormulario(false);            //Oculta el formulario después de agregar la tecnología 
  };

  return (
    <div
      className="
        mt-10 flex flex-col items-center gap-10 
        bg-gray-900/60 backdrop-blur-xl border border-gray-800 
        rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto
      "
    >
      <h1 className="text-3xl font-bold text-cyan-400 tracking-wide drop-shadow-lg">
        TECNOLOGÍAS
      </h1>

      <button
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        className="
          bg-blue-500 hover:bg-blue-600 
          text-white py-2 px-4 rounded-lg font-semibold shadow-md
        "
      >
        {mostrarFormulario ? "Cerrar Formulario" : "Agregar Tecnología"}
      </button>

      {mostrarFormulario && (
        <FormularioTecnologia onAgregar={agregarTecnologia} />
      )}

      {tecnologias.length > 0 ? (
        <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed">
          {tecnologias.map((tec, index) => (
            <li key={index}>{tec}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-lg">Aún no agregas tecnologías.</p>
      )}
    </div>
  );
}
