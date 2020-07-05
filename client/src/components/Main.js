import React, { useContext } from "react";
import { ClienteList } from "./Cliente/ClienteList";
import { ComentarioList } from "./Comentario/ComentarioList";
import { GlobalContext } from "../context/GlobalState";
import { STORAGE_KEY } from "../utils/auth";
import history from "./History";
import { BrowserRouter } from "react-router-dom";

export const Main = () => {
  const { selectedCliente } = useContext(GlobalContext);

  var SignOut = function () {
    localStorage.removeItem(STORAGE_KEY);
    history.push("/login");
    window.location.reload(false);
  };

  return (
    <BrowserRouter>
    <button onClick={SignOut} className="btn btn-outline-danger">Sign Out</button>
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <ClienteList />
          </div>
          <div className="col-sm-12 col-md-8">{selectedCliente ? <ComentarioList key={selectedCliente._id} cliente={selectedCliente} /> : <></>}</div>
        </div>
        
      </div>
    </BrowserRouter>
  );
};
