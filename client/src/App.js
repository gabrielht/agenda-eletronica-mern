import React, { useContext } from "react";
import { Header } from "./components/Header";
import { ClienteList } from "./components/ClienteList";
import { AddCliente } from "./components/AddCliente";
import { ComentarioList } from "./components/ComentarioList"
import { GlobalProvider, GlobalContext } from "./context/GlobalState";

import "./App.css";

function App() {
  const { selectedCliente } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <div className="container">
          <Header />
        <div className="row">
          <div className="col-4">
            <ClienteList />
          </div>
          <div className="col-8">
            <ComentarioList key={selectedCliente._id} cliente={selectedCliente} />
          </div>
        </div>
        <AddCliente />
      </div>
    </GlobalProvider>
  );
}

export default App;
