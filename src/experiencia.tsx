import {ExperienciaData} from './data';
export default function Experiencia() {
  const {Trabajos, Funciones} = ExperienciaData;
  return (
    <div className="mt-10 flex flex-col items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-black/40 max-w-3xl mx-auto border border-gray-700">

      {/* EXPERIENCIA LABORAL */}
      <section className="w-full flex flex-col items-start gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">
          EXPERIENCIA LABORAL
        </h1>

        {/* Práctica Biomédica */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
            {Trabajos.Cargo[0]}
          </h2>
          <p className="text-gray-300 text-lg">
            {Trabajos.Empresa[0]}
          </p>
          <p className="text-gray-400 text-sm">{Trabajos.Duracion[0]}</p>

          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
            <li>
              {Funciones.Practicante[0]}
            </li>
            <li>
              {Funciones.Practicante[1]}
            </li>
            <li>
              {Funciones.Practicante[2]}
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

        {/* Trabajo en el bar */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
            {Trabajos.Cargo[1]}
          </h2>
          <p className="text-gray-300 text-lg">{Trabajos.Empresa[1]}</p>
          <p className="text-gray-400 text-sm">{Trabajos.Duracion[1]}</p>

          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
            <li>
              {Funciones.Bar[0]}
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-gray-700 mt-4"></div>
      </section>

    </div>
  )
}