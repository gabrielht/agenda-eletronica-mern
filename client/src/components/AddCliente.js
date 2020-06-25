import React, { useState } from "react";

export const AddCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
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
