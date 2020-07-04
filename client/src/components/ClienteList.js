import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Cliente } from "./Cliente";
import { AddCliente } from "./AddCliente";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import {Collapse} from 'reactstrap'

export const ClienteList = () => {
  const { clientes, getClienteById } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('Usuario'))
    let createdBy = user.uid;

    getClienteById(createdBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Clientes <button type="button" onClick={toggle} className="btn btn-success"><FontAwesomeIcon icon={isOpen ? faMinus : faPlus } /></button></h3>
        <Collapse isOpen={isOpen}>
          <AddCliente />
        </Collapse>
      <ul>
        {clientes.map((cliente) => (
          <Cliente key={cliente._id} cliente={cliente}/>
        ))}
      </ul>
    </div>
  );
};
