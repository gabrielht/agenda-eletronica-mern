import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddComentario = () => {
  const [comentario, setComentario] = useState("");
  const [valor, setValor] = useState("");
  const [state, setstate] = useState("");

  const { selectedCliente } = useContext(GlobalContext)

  const onSubmit = (e) =>{
    e.preventDefault();
    
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-row col">
          <textarea className="form-control"></textarea>

        </div>
      </form>
    </div>
  );
};
