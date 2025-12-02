import { useState } from "react";

type Props = {
  onAgregar: (tecnologia: string) => void;
};

export default function FormularioTecnologia({ onAgregar }: Props) {
  const [tecnologia, setTecnologia] = useState<string>(""); //Estado local para almacenar el valor del input que ingresa el usuario

  const handleSubmit = (e: React.FormEvent) => { //Maneja el envío del formulario cuando el usuario hace un click en sumbit e:React.FormEvent evita que la pagina se recargue
    e.preventDefault(); //Evita el comportamiento por defecto del formulario
    if (tecnologia.trim() === "") return; //Si el campo está vacío no hace nada
    onAgregar(tecnologia);
    setTecnologia("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full bg-gray-900/60 p-6 rounded-2xl border border-gray-800 
        shadow-xl space-y-4
      "
    >
      <h2 className="text-xl font-bold text-cyan-400 tracking-wide">
        Agregar Tecnología
      </h2>

      <input
        type="text"
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
        placeholder="Escribe una tecnología..."
        className="
          w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
          text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400
        "
      />

      <button
        type="submit"
        className="
          w-full bg-cyan-500 hover:bg-cyan-600 
          text-white py-2 rounded-lg font-semibold shadow-md
        "
      >
        Agregar
      </button>
    </form>
  );
}
