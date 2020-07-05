import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Comentario } from "./Comentario";
import { AddComentario } from "./AddComentario";

export const ComentarioList = ({ cliente }) => {
  const { comentarios, getComentarios, selectedCliente } = useContext(GlobalContext);

  useEffect(() => {
    if (!cliente._id) return;
    else getComentarios(cliente);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h3>Comentarios</h3>
      <ul>{comentarios.length !== 0 ? comentarios.map((comentario) => <Comentario key={comentario._id} comentario={comentario} />) : "Ainda nao temos nenhum comentario :("}</ul>
      <div className="addComentario">{selectedCliente._id ? <AddComentario /> : ""}</div>
    </div>
  );
};
