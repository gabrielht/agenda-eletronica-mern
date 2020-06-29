import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Cliente = ({ cliente }) => {
  const { deleteCliente } = useContext(GlobalContext);
  return (
    <div>
      <li>
        {cliente.nome} <span>{cliente.email}</span>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteCliente(cliente._id)}
        >
          x
        </button>
      </li>
    </div>
  );
};
