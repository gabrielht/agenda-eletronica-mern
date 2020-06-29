import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Comentario } from "./Comentario";

export const ComentarioList = () => {
  const { comentarios } = useContext(GlobalContext);
  return (
    <div>
      <h3>Comentarios</h3>
      <ul>
        {comentarios.map((comentario) => (
          <Comentario key={comentario.id} comentario={comentario} />
        ))}
      </ul>
    </div>
  );
};
