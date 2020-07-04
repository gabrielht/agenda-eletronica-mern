import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import moment from 'moment';
import {Card, CardHeader, CardBody, CardText} from 'reactstrap'

export const Cliente = ({ cliente }) => {
  const { deleteCliente, selectCliente, selectedCliente } = useContext(
    GlobalContext
  );

  let createdAt = moment(cliente.createdAt,"YYYY-MM-DD").format("DD/MM/YYYY")

  return (
    <div>
      <Card onClick={() => selectCliente(cliente)} className={selectedCliente && cliente._id === selectedCliente._id ? "selected" : ""}>
        <CardHeader><span><b>{cliente.nome}</b></span><span>{createdAt}</span></CardHeader>
        <CardBody>
          <div className="content">
            {cliente?.telefone ? <span><FontAwesomeIcon icon={faWhatsapp} /> {cliente.telefone}</span> : <></>}
            <span>{cliente.email}</span>
          </div>   
          <div>
            <button className="btn btn-danger" onClick={() => deleteCliente(cliente._id)}><FontAwesomeIcon icon={faTimes} /></button>
          </div>     
        </CardBody>
      </Card>
    </div>
  );
};
