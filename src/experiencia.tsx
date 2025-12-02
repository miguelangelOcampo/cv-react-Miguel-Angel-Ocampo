import { ExperienciaData } from "./data";

export default function Experiencia() {
  const { Trabajos, Funciones } = ExperienciaData;

  return (
    <div
      className="
        mt-10 flex flex-col items-center gap-12 
        bg-gray-900/60 backdrop-blur-xl border border-gray-800 
        rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto
      "
    >
      {/* EXPERIENCIA LABORAL */}
      <section className="w-full space-y-6">
        <h1 className="text-3xl font-bold text-cyan-400 tracking-wide drop-shadow-lg">
          EXPERIENCIA LABORAL
        </h1>

        {/* Práctica Biomédica */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            {Trabajos.Cargo[0]}
          </h2>

          <p className="text-gray-300 text-lg">{Trabajos.Empresa[0]}</p>
          <p className="text-gray-500 text-sm">{Trabajos.Duracion[0]}</p>

          <ul className="list-disc ml-5 space-y-2 text-gray-400 text-lg leading-relaxed">
            <li>{Funciones.Practicante[0]}</li>
            <li>{Funciones.Practicante[1]}</li>
            <li>{Funciones.Practicante[2]}</li>
          </ul>
        </div>

        <div className="section-divider" />

        {/* Trabajo en el Bar */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            {Trabajos.Cargo[1]}
          </h2>

          <p className="text-gray-300 text-lg">{Trabajos.Empresa[1]}</p>
          <p className="text-gray-500 text-sm">{Trabajos.Duracion[1]}</p>

          <ul className="list-disc ml-5 space-y-2 text-gray-400 text-lg leading-relaxed">
            <li>{Funciones.Bar[0]}</li>
          </ul>
        </div>

        <div className="section-divider" />
      </section>
    </div>
  );
}
