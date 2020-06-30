import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const { addCliente } = useContext(GlobalContext);

  function gerarId() {
    return Math.floor(Math.random() * 100);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newCliente = {
      id: gerarId(),
      nome,
      email,
    };

    debugger
    addCliente(newCliente);
  };

  return (
    <div>
      <h3>Adione um novo Cliente</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome..."
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o email..."
          />
        </div>
        <button>Adicionar Cliente</button>
      </form>
    </div>
  );
};
