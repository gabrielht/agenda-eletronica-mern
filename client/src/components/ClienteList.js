import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Cliente } from "./Cliente";

export const ClienteList = () => {
  const { clientes } = useContext(GlobalContext);
  return (
    <div>
      <h3>Clientes</h3>
      <ul>
        {clientes.map((cliente) => (
          <Cliente key={cliente.id} cliente={cliente} />
        ))}
      </ul>
    </div>
  );
};
