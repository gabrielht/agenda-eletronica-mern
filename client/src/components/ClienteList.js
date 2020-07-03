import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Cliente } from "./Cliente";
import { AddCliente } from "./AddCliente";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const ClienteList = () => {
  const { clientes, getClientes } = useContext(GlobalContext);

  useEffect(() => {
    getClientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Clientes <FontAwesomeIcon icon={faPlus} data-toggle="collapse" data-target="#contentId" aria-expanded="false"
        aria-controls="contentId" /></h3>
        <div className="collapse" id="contentId">
        <AddCliente />    
      </div>
      <ul>
        {clientes.map((cliente) => (
          <Cliente key={cliente._id} cliente={cliente}/>
        ))}
      </ul>
    </div>
  );
};
