function Perfil() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-black/40 max-w-3xl mx-auto border border-gray-700">

  {/* PERFIL */}
  <section className="w-full flex flex-col items-start gap-4">
    <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">PERFIL</h1>
    <p className="text-lg text-gray-300 leading-relaxed">
      Soy una persona empática y colaborativa, con facilidad para el trabajo en equipo.
      De rápido aprendizaje, apasionada por adquirir nuevas habilidades y conocimiento.
      Servicial, proactiva y con una actitud positiva hacia los desafíos.
    </p>
    <div className="w-full h-[1px] bg-gray-700 mt-2"></div>
  </section>

  {/* APTITUDES */}
  <section className="w-full flex flex-col items-start gap-4">
    <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">APTITUDES</h1>
    <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg">
      <li>Conocimientos intermedios en electrónica, programación e informática.</li>
      <li>Manejo de herramientas ofimáticas como Excel, Word y PowerPoint.</li>
      <li>
        Manejo de herramientas de productividad y automatización de Microsoft
        como Power Apps, Power Automate y SharePoint.
      </li>
      <li>Conocimientos medio-avanzados en software CAD (SolidWorks).</li>
    </ul>
    <div className="w-full h-[1px] bg-gray-700 mt-2"></div>
  </section>

  {/* AFICIONES */}
  <section className="w-full flex flex-col items-start gap-4">
    <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">AFICIONES</h1>
    <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg">
      <li>Entrenamiento físico.</li>
      <li>Entusiasta de la ciencia.</li>
      <li>Programación de hardware IoT.</li>
      <li>Videojuegos.</li>
      <li>Cocinar.</li>
    </ul>
    <div className="w-full h-[1px] bg-gray-700 mt-2"></div>
  </section>

  {/* REFERENCIA */}
  <section className="w-full flex flex-col items-start gap-4">
    <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">REFERENCIA</h1>
    <p className="text-lg text-gray-300 leading-relaxed">
      Jhon Fredy Muñoz Agudelo — Secretaría de Educación de Antioquia | Docente. <br />
      <span className="text-orange-400 font-medium">320 595 2710</span>
    </p>
    <div className="w-full h-[1px] bg-gray-700 mt-2"></div>
  </section>

</div>

  )
}
export default Perfil