import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Cliente } from "./Cliente";

export const ClienteList = () => {
  const { clientes, getClientes } = useContext(GlobalContext);

  useEffect(() => {
    getClientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Clientes</h3>
      <ul>
        {clientes.map((cliente) => (
          <Cliente key={cliente._id} cliente={cliente}/>
        ))}
      </ul>      
    </div>
  );
};
