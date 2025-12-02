import { EstudiosData } from "./data";

export default function Estudios() {
  const { Titulos, Cursos, Idiomas, Permisos } = EstudiosData;

  return (
    <div
      className="
        mt-10 flex flex-col items-center gap-12 
        bg-gray-900/60 backdrop-blur-xl border border-gray-800 
        rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto
      "
    >
      {/* EDUCACIÓN */}
      <section className="w-full space-y-6">
        <h1 className="text-3xl font-bold text-cyan-400 tracking-wide drop-shadow-lg">
          EDUCACIÓN
        </h1>

        {/* Ingeniería Biomédica */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            {Titulos.Carrera[0]}
          </h2>

          <p className="text-gray-300 text-lg">{Titulos.Institucion[0]}</p>

          <ul className="list-disc ml-5 space-y-2 text-gray-400 text-lg leading-relaxed">
            <li>{Titulos.Descripcion[0]}</li>
          </ul>
        </div>

        <div className="section-divider" />

        {/* Bachiller Técnico */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            {Titulos.Carrera[1]}
          </h2>

          <p className="text-gray-300 text-lg">{Titulos.Institucion[1]}</p>

          <ul className="list-disc ml-5 space-y-2 text-gray-400 text-lg leading-relaxed">
            <li>{Titulos.Descripcion[1]}</li>
          </ul>
        </div>

        <div className="section-divider" />

        {/* Cursos */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">CURSOS</h2>

          <ul className="list-disc ml-5 space-y-2 text-gray-400 text-lg leading-relaxed">
            <li>
              {Cursos.Titulo[0]}{" "}
              <span className="text-gray-500 text-sm">{Cursos.Fecha[0]}</span>
            </li>
            <li>
              {Cursos.Titulo[1]}{" "}
              <span className="text-gray-500 text-sm">{Cursos.Fecha[1]}</span>
            </li>
          </ul>
        </div>

        <div className="section-divider" />

        {/* Idiomas */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">IDIOMAS</h2>

          <ul className="list-disc ml-5 space-y-2 text-gray-400 text-lg leading-relaxed">
            <li>{Idiomas.ingles[0]}</li>
          </ul>
        </div>

        <div className="section-divider" />

        {/* Permisos */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            PERMISOS Y LICENCIAS
          </h2>

          <ul className="list-disc ml-5 space-y-2 text-gray-400 text-lg leading-relaxed">
            <li className="list-none text-gray-300">{Permisos.Licencia[0]}</li>
            <li>{Permisos.Tipo[0]}</li>
            <li>{Permisos.Tipo[1]}</li>
            <li>{Permisos.Tipo[2]}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
