import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const { addCliente } = useContext(GlobalContext);

  function clearForm() {
    setNome("");
    setEmail("");
    setTelefone("");
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newCliente = {
      nome,
      email,
    };

    debugger;
    addCliente(newCliente);
    clearForm();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-row col-md-12">
          <div className="form-group col-md-6">
            <label htmlFor="nome">Nome</label>
            <input id="nome" className="form-control" type="text" name="" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input id="email" className="form-control" type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" className="form-control" type="tel" name="" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar Cliente
        </button>
      </form>
    </div>
  );
};
