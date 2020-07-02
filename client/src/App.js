import React, { useContext } from "react";
import { Header } from "./components/Header";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";

import "./App.css";
import { Main } from "./components/Main";

function App() {
  const { selectedCliente } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <div className="container">
          <Header />
          <Main />
      </div>
    </GlobalProvider>
  );
}

export default App;
