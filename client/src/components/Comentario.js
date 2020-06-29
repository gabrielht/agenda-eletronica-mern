import React from "react";

export const Comentario = ({ comentario }) => {
  return (
    <div>
      <li>
        {comentario.comentario} {comentario.valor}
      </li>
    </div>
  );
};
