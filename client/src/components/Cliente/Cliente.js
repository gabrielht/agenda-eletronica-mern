import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import moment from "moment";
import { Card, CardHeader, CardBody } from "reactstrap";
import Swal from "sweetalert2";

export const Cliente = ({ cliente }) => {
  const { deleteCliente, selectCliente, selectedCliente } = useContext(GlobalContext);

  const deleteModal = (cliente) => {
    Swal.fire({
      title: "Remover cliente?",
      text: "Você não pode reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
    }).then((result) => {
      if (result.value) {
        deleteCliente(cliente);
        Swal.fire("Removido!", "Seu cliente foi removido.", "success");
      }
    });
  };

  let createdAt = moment(cliente.createdAt, "YYYY-MM-DD").format("DD/MM/YYYY");

  return (
    <div>
      <Card onClick={() => selectCliente(cliente)} className={selectedCliente && cliente._id === selectedCliente._id ? "selected" : ""}>
        <CardHeader>
          <span>
            <b>{cliente.nome}</b>
          </span>
          <span>{createdAt}</span>
        </CardHeader>
        <CardBody>
          <div className="content">
            {cliente?.telefone ? (
              <span>
                <FontAwesomeIcon icon={faWhatsapp} /> {cliente.telefone}
              </span>
            ) : (
              <></>
            )}
            <span>{cliente.email}</span>
          </div>
          <div>
            <button className="btn btn-danger" onClick={() => deleteModal(cliente._id)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
