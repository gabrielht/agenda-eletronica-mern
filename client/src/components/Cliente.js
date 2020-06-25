import React from "react";

export const Cliente = ({ cliente }) => {
  return (
    <div>
      <li>
        {cliente.nome} <span>{cliente.email}</span>
      </li>
    </div>
  );
};
