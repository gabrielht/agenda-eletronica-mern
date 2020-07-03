import React, { useContext } from "react";
import { ClienteList } from "./ClienteList";
import { ComentarioList } from "./ComentarioList";
import { GlobalContext } from "../context/GlobalState";

export const Main = () => {
  const { selectedCliente } = useContext(GlobalContext);

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <ClienteList />
        </div>
        <div className="col-sm-12 col-md-8">
          {selectedCliente ? <ComentarioList key={selectedCliente._id} cliente={selectedCliente} /> : <></>}
          </div>
      </div>
    </div>
  );
};
