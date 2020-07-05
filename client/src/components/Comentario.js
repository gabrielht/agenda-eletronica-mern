import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import moment from "moment";
export const Comentario = ({ comentario }) => {
  let createdAt = moment(comentario.createdAt, "YYYY-MM-DD").format("DD/MM/YYYY");

  return (
    <div>
      <Card>
        <CardHeader>
          <span>
            <b>{createdAt}</b>
          </span>
          <span>{}</span>
        </CardHeader>
        <CardBody>
          <div className="content">"{comentario.comentario}"</div>
        </CardBody>
      </Card>
    </div>
  );
};
