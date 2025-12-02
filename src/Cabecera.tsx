import { CabeceraData } from "./data";

function Cabecera() {
  const { Nombre, Celular, Email, Ubicacion } = CabeceraData;

  return (
    <div
      className="
        mt-10 flex flex-col items-center text-center gap-4
        bg-[#0e1117] border border-gray-800 backdrop-blur-xl
        rounded-3xl p-10 shadow-2xl shadow-black/50
        max-w-2xl mx-auto text-gray-300
      "
    >
      {/* NOMBRE */}
      <h1 className="text-xl md:text-3xl font-bold text-cyan-400 tracking-wide drop-shadow-lg">

        {Nombre}
      </h1>

      {/* CELULAR */}
      <h2 className="text-xl text-gray-400 font-medium tracking-widest">
        {Celular}
      </h2>

      {/* EMAIL */}
      <a
        href={`mailto:${Email}`}
        className="
          text-cyan-300 hover:text-cyan-200 
          transition-all duration-200 text-lg font-medium underline-offset-4 hover:underline
        "
      >
        {Email}
      </a>

      {/* UBICACIÓN */}
      <h3 className="text-lg text-gray-400 tracking-wide">
        {Ubicacion}
      </h3>

      {/* Divisor */}
      <div className="w-full h-px bg-gray-700 mt-4"></div>
    </div>
  );
}

export default Cabecera;
