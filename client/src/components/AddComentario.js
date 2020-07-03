import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddComentario = () => {
  const [tipo_comentario, setTipoComentario] = useState("");
  const [valor, setValor] = useState("");
  const [comentario, setComentario] = useState("");

  const { selectedCliente, addComentario } = useContext(GlobalContext)

  const onSubmit = (e) =>{
    e.preventDefault();
    var cliente_id = selectedCliente._id
    
    const cliente = {
      cliente_id,
      tipo_comentario,
      valor,
      comentario,
    };

    addComentario(cliente)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="col">
            <select value={tipo_comentario} onChange={(e) => setTipoComentario(e.target.value)} className="form-control">
              <option value="1" selected>Comentario</option>
              <option value="2">Atendimento</option>
            </select>
          </div> 
          <div className="col">
            {tipo_comentario === '2' ? <input id="valor" type="number" className="form-control" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor"></input> : <></>}
          </div> 
          <div className="col-12">
            <textarea id="comentario" className="form-control" value={comentario} onChange={(e) => setComentario(e.target.value)} required placeholder="Comentario"></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary justify-right">Adicionar Comentario</button>
      </form>
    </div>
  );
};
