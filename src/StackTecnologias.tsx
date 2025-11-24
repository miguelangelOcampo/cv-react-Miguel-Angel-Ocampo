export default function Tecnologias() {
  const tecnologias = {
    Lenguajes: ["JavaScript", "Python", "micropython", "Node.js", "HTML5", "CSS"],
    Frameworks: ["React", "Express", "Tailwind CSS"],
    Herramientas: ["Git & GitHub", "Power Apps", "Power Automate", "MySQL", "Mongo DB"],
  };

  // Si NO hay tecnologías
  if (
    tecnologias.Lenguajes.length === 0 &&
    tecnologias.Frameworks.length === 0 &&
    tecnologias.Herramientas.length === 0
  ) {
    return (
      <div className="mt-10 flex flex-col items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-black/40 max-w-3xl mx-auto border border-gray-700">
        <section className="w-full flex flex-col items-start gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">
            TECNOLOGÍAS
          </h1>
          <p className="text-gray-300 text-lg">No hay tecnologías disponibles.</p>
        </section>
      </div>
    );
  }

  // Si SÍ hay tecnologías
  return (
    <div className="mt-10 flex flex-col items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-black/40 max-w-3xl mx-auto border border-gray-700">
      <section className="w-full flex flex-col items-start gap-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">
          TECNOLOGÍAS
        </h1>

        {/* Lenguajes */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
            Lenguajes de Programación
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
            {tecnologias.Lenguajes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

        {/* Frameworks */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
            Frameworks y Librerías
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
            {tecnologias.Frameworks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

        {/* Herramientas */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
            Herramientas y Tecnologías
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
            {tecnologias.Herramientas.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

