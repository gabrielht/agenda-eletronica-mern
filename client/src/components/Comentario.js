import React from "react";
import {Card, CardHeader, CardBody} from 'reactstrap'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
export const Comentario = ({ comentario }) => {
  let createdAt = moment(comentario.createdAt,"YYYY-MM-DD").format("DD/MM/YYYY")

  return (
    <div>
      <Card>
        <CardHeader><span><b>{createdAt}</b></span><span>{}</span></CardHeader>
        <CardBody>
          <div className="content">"{comentario.comentario}"</div>
        </CardBody>
      </Card>
    </div>
  );
};
