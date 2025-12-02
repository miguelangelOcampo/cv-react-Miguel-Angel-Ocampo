import { useState } from "react";
import Habilidades from "./Habilidades";

type Props = {
  habilidades: string[];
};

export default function ToggleHabilidades({ habilidades }: Props) {
  const [mostrar, setMostrar] = useState(true);

  return (
    <section>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {mostrar && <Habilidades habilidades={habilidades} />}
    </section>
  );
}
