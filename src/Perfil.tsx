import { PerfilData } from "./data";

function Perfil() {
  const { PerfilProfesional, Aptitudes, Aficciones, Referencia } = PerfilData;

  return (
    <div
      className="
      mt-10 flex flex-col items-center gap-12 
      bg-[#0e1117] border border-gray-800 
      rounded-3xl p-10 md:p-14 shadow-2xl shadow-black/50 
      max-w-3xl mx-auto text-gray-300 
      backdrop-blur-xl
    "
    >

      {/* PERFIL */}
      <section className="w-full space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide">
          PERFIL
        </h1>

        <p className="text-lg text-gray-300/90 leading-relaxed tracking-wide">
          {PerfilProfesional}
        </p>

        <div className="w-full h-px bg-gray-700 mt-2"></div>
      </section>

      {/* APTITUDES */}
      <section className="w-full space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide">
          APTITUDES
        </h1>

        <ul className="list-none space-y-2 text-gray-300/90 text-lg">
          {Aptitudes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">▹</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="w-full h-px bg-gray-700 mt-2"></div>
      </section>

      {/* AFICIONES */}
      <section className="w-full space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide">
          AFICIONES
        </h1>

        <ul className="list-none space-y-2 text-gray-300/90 text-lg">
          {Aficciones.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">▹</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="w-full h-px bg-gray-700 mt-2"></div>
      </section>

      {/* REFERENCIA */}
      <section className="w-full space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide">
          REFERENCIA
        </h1>

        <p className="text-lg text-gray-300/90 leading-relaxed tracking-wide">
          {Referencia.Nombre} <br />
          <span className="text-cyan-300 font-semibold tracking-wider">
            {Referencia.Telefono}
          </span>
        </p>

        <div className="w-full h-px bg-gray-700 mt-2"></div>
      </section>
    </div>
  );
}

export default Perfil;
