import { CabeceraData } from "./data"; //importacion de datos

function Cabecera() {
  const { Nombre, Celular, Email, Ubicacion } = CabeceraData; // destructuracion de datos 
  return (
    <>
      <div className="mt-10 flex flex-col items-center text-center gap-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-black/40 max-w-2xl mx-auto border border-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          {Nombre}
        </h1>

        <h2 className="text-xl text-gray-300 tracking-[3px]">
          {Celular}
        </h2>

        <a
          href="mailto:miguelangelocampo713@gmail.com"
          className="text-orange-400 hover:text-orange-300 transition-colors underline text-lg"
        >
          {Email}
        </a>

        <h3 className="text-lg text-gray-400">{Ubicacion}</h3>
      </div>


    </>
  )
}

export default Cabecera
