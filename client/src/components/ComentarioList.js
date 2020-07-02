import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Comentario } from "./Comentario";

export const ComentarioList = ({ cliente }) => {
  const { comentarios, getComentarios } = useContext(GlobalContext);

  useEffect(() => {
    if (!cliente._id) return
    else getComentarios(cliente);
  }, []);

  return (
    <div>
      <h3>Comentarios</h3>
      <ul>
        {comentarios.length !== 0 ? comentarios.map((comentario) => (
          <Comentario key={comentario.id} comentario={comentario} />
        )) : "Ainda nao temos nenhum comentario :("}
      </ul>
    </div>
  );
};
