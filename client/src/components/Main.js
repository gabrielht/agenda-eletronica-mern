import React, { useContext } from "react";
import { ClienteList } from "./ClienteList";
import { ComentarioList } from "./ComentarioList";
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
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <ClienteList />
          </div>
          <div className="col-sm-12 col-md-8">{selectedCliente ? <ComentarioList key={selectedCliente._id} cliente={selectedCliente} /> : <></>}</div>
        </div>
        <button onClick={SignOut}>Sign Out</button>
      </div>
    </BrowserRouter>
  );
};
