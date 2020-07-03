import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Cliente } from "./Cliente";
import { AddCliente } from "./AddCliente";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

export const ClienteList = () => {
  const { clientes, getClientes } = useContext(GlobalContext);
  const [Open, setOpen] = useState(false)  
  
  const toggle = () => setOpen(!Open)
  useEffect(() => {
    getClientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Clientes <button type="button" onClick={toggle} className="btn btn-success"><FontAwesomeIcon icon={Open ? faMinus : faPlus } data-toggle="collapse" data-target="#contentId" aria-expanded="false"
        aria-controls="contentId" /></button> </h3>
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
