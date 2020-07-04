import React, { useContext } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";

import "./App.css";
import { Main } from "./components/Main";

function App() {
  const { selectedCliente } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <Router>
      <div className="container">
        <div>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Header}>
            <Header />
              <Main />
          </Route>
        </div>
      </div>
      </Router> 
    </GlobalProvider>
  );
}

export default App;
