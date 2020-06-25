import React from "react";
import { Header } from "./components/Header";
import { ClienteList } from "./components/ClienteList";
import { AddCliente } from "./components/AddCliente";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <ClienteList />
        <AddCliente />
      </div>
    </GlobalProvider>
  );
}

export default App;
