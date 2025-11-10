
export default function Experiencia() {
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
            PRACTICANTE DE INGENIERÍA BIOMÉDICA
          </h2>
          <p className="text-gray-300 text-lg">
            FUNDACIÓN CLÍNICA NOEL | MEDELLÍN
          </p>
          <p className="text-gray-400 text-sm">FEB. 2024 – AGO. 2024</p>

          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
            <li>
              Practicante proactivo de ingeniería biomédica con 6 meses de experiencia
              en clínica de segundo nivel, enfocado en el mantenimiento y gestión de la
              tecnología biomédica e infraestructura.
            </li>
            <li>
              Habilidades en la generación de cronogramas eficientes y ejecución de
              planes de mejora continua mediante herramientas como Power Apps.
            </li>
            <li>
              Competencias en la reparación de infraestructura básica y diversa de la clínica.
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

        {/* Trabajo en el bar */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
            ASISTENTE DE COCINA Y MESERO
          </h2>
          <p className="text-gray-300 text-lg">BAR LOCAL | MEDELLÍN</p>
          <p className="text-gray-400 text-sm">3 MESES</p>

          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
            <li>
              Apoyo en la preparación de alimentos y atención al cliente,
              fortaleciendo habilidades de trabajo en equipo y comunicación.
            </li>
          </ul>
        </div>

        <div className="w-full h-[1px] bg-gray-700 mt-4"></div>
      </section>

    </div>
  )
}