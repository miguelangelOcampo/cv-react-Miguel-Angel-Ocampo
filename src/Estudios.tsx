import{ EstudiosData } from "./data";
export default function Estudios() {
  const {Titulos, Cursos, Idiomas, Permisos} = EstudiosData;
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
        {Titulos.Carrera[0]}
      </h2>
      <p className="text-gray-300 text-lg">
        {Titulos.Institucion[0]}
      </p>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li>
          {Titulos.Descripcion[0]}
        </li>
      </ul>
    </div>

    <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

    {/* Bachiller Técnico */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
        {Titulos.Carrera[1]}
      </h2>
      <p className="text-gray-300 text-lg">
        {Titulos.Institucion[1]}
      </p>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li>
          {Titulos.Descripcion[1]}
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
        <li>{Cursos.Titulo[0]}<span className="text-gray-400 text-sm">{Cursos.Fecha[0]}</span></li>
        <li>{Cursos.Titulo[1]}<span className="text-gray-400 text-sm">{Cursos.Fecha[1]}</span></li>
      </ul>
    </div>

    <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

    {/* Idiomas */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
        IDIOMAS
      </h2>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li>{Idiomas.ingles[0]}</li>
      </ul>
    </div>

    <div className="w-full h-[1px] bg-gray-700 mt-4"></div>

    {/* Permiso de conducción */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
        PERMISOS Y LICENCIAS
      </h2>
      <ul className="list-disc ml-5 space-y-2 text-gray-300 text-lg leading-relaxed mt-2">
        <li className="text-gray-300 text-lg list-none">{Permisos.Licencia[0]}</li>
        <li>{Permisos.Tipo[0]}</li>
        <li>{Permisos.Tipo[1]}</li>
        <li>{Permisos.Tipo[2]}</li>
      </ul>
    </div>
  </section>
</div>
    )
    }