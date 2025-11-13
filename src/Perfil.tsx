import { PerfilData } from "./data";

function Perfil() {
  const { PerfilProfesional, Aptitudes, Aficciones, Referencia } = PerfilData;
  return (
    <div className="mt-10 flex flex-col items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg shadow-black/40 max-w-3xl mx-auto border border-gray-700">

      {/* PERFIL */}
      <section className="w-full flex flex-col items-start gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">PERFIL</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          {PerfilProfesional}
        </p>
        <div className="w-full h-[1px] bg-gray-700 mt-2"></div>
      </section>

      {/* APTITUDES */}
      <section className="w-full flex flex-col items-start gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">APTITUDES</h1>
        <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg">
          <li>{Aptitudes[0]}</li>
          <li>{Aptitudes[1]}</li>
          <li>{Aptitudes[2]}</li>
          <li>{Aptitudes[3]}</li>
        </ul>
        <div className="w-full h-[1px] bg-gray-700 mt-2"></div>
      </section>

      {/* AFICIONES */}
      <section className="w-full flex flex-col items-start gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">AFICIONES</h1>
        <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg">
          <li>{Aficciones[0]}</li>
          <li>{Aficciones[1]}</li>
          <li>{Aficciones[2]}</li>
          <li>{Aficciones[3]}</li>
          <li>{Aficciones[4]}</li>
        </ul>
        <div className="w-full h-[1px] bg-gray-700 mt-2"></div>
      </section>

      {/* REFERENCIA */}
      <section className="w-full flex flex-col items-start gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-400">REFERENCIA</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          {Referencia.Nombre} <br />
          <span className="text-orange-400 font-medium">{Referencia.Telefono}</span>
        </p>
        <div className="w-full h-[1px] bg-gray-700 mt-2"></div>
      </section>

    </div>

  )
}
export default Perfil