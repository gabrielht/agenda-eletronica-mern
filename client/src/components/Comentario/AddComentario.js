import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const AddComentario = () => {
  const [tipo_comentario, setTipoComentario] = useState(1);
  const [_valor, setValor] = useState("");
  const [comentario, setComentario] = useState("");

  const { selectedCliente, addComentario } = useContext(GlobalContext);

  function clearForm() {
    setTipoComentario(1);
    setValor(0);
    setComentario("");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    var cliente_id = selectedCliente._id;
    var valor = tipo_comentario === "1" ? 0 : _valor;
    const cliente = {
      cliente_id,
      tipo_comentario,
      valor,
      comentario,
    };

    addComentario(cliente);
    clearForm();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col form-group">
            <select value={tipo_comentario} onChange={(e) => setTipoComentario(e.target.value)} className="form-control">
              <option value="1">Comentario</option>
              <option value="2">Atendimento</option>
            </select>
          </div>
          <div className="col form-group">{tipo_comentario === "2" ? <input id="valor" type="number" className="form-control" value={_valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor"></input> : <></>}</div>
          <div className="col-12 form-group">
            <textarea id="comentario" className="form-control" value={comentario} onChange={(e) => setComentario(e.target.value)} required placeholder="Comentario"></textarea>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Adicionar Comentario
        </button>
      </div>
    </div>
  );
};
