import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Cliente = ({ cliente }) => {
  const { deleteCliente, selectCliente, selectedCliente } = useContext(
    GlobalContext
  );
  return (
    <div>
      <li
        onClick={() => selectCliente(cliente)}
        className={
          selectedCliente && cliente._id === selectedCliente._id
            ? "selected"
            : ""
        }
      >
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
