import React from "react";

export const Comentario = ({ comentario }) => {
  return (
    <div>
      <li>
        {comentario.comentario}
      </li>
    </div>
  );
};
