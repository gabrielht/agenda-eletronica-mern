import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import moment from "moment";
import {numeroComVirgula} from "../../utils/format"

export const Comentario = ({ comentario }) => {
  let createdAt = moment(comentario.createdAt, "YYYY-MM-DD").format("DD/MM/YYYY");

  return (
    <div>
      <Card>
        <CardHeader>
          <span>
            <b>{createdAt}</b>
          </span>
          <span className="money">R$ {comentario.valor > 0 ? numeroComVirgula(Math.abs(comentario.valor)) : <></>}</span>
        </CardHeader>
        <CardBody>
          <div className="content">"{comentario.comentario}"</div>
        </CardBody>
      </Card>
    </div>
  );
};
