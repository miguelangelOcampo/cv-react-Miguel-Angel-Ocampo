export default function Estudios() {
    return (
        <div className="mt-10 flex flex-col items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-black/40 max-w-3xl mx-auto border border-gray-700">

  {/* EDUCACIÓN */}
  <section className="w-full flex flex-col items-start gap-4">
    <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">
      EDUCACIÓN
    </h1>

    {/* Ingeniería Biomédica */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
        TITULACIÓN EN INGENIERÍA BIOMÉDICA
      </h2>
      <p className="text-gray-300 text-lg">
        INSTITUTO TECNOLÓGICO METROPOLITANO (ITM)
      </p>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li>
          Asocia conocimientos ingenieriles al ámbito biomédico como el desarrollo,
          mantenimiento y gestión de los equipos o dispositivos biomédicos.
        </li>
      </ul>
    </div>

    <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

    {/* Bachiller Técnico */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
        BACHILLER TÉCNICO EN DESARROLLO Y PROGRAMACIÓN DE SOFTWARE
      </h2>
      <p className="text-gray-300 text-lg">
        INSTITUCIÓN EDUCATIVA LUIS LÓPEZ DE MESA
      </p>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li>
          Habilidades en programación orientada a objetos y en el uso de etiquetas y
          hojas de estilos en cascada (HTML y CSS).
        </li>
      </ul>
    </div>

    <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

    {/* Cursos */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
        CURSOS
      </h2>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li>Excel Intermedio – Teachlr. <span className="text-gray-400 text-sm">Dic. 2023</span></li>
        <li>Curso Profesional de HTML y CSS – Azul School. <span className="text-gray-400 text-sm">Nov. 2023</span></li>
      </ul>
    </div>

    <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

    {/* Idiomas */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
        IDIOMAS
      </h2>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li>Inglés – Lectura: Bueno | Redacción: Intermedio | Comunicación verbal: Intermedio.</li>
      </ul>
    </div>

    <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

    {/* Permiso de conducción */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
        PERMISO DE CONDUCCIÓN
      </h2>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li>B1 – Automóviles particulares</li>
        <li>A2 – Motocicletas de cualquier cilindraje</li>
        <li>C1 – Automóviles de servicio público</li>
      </ul>
    </div>
  </section>
</div>
    )
    }