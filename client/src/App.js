import React, { useContext } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import  history  from "./components/History";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, withRouter, Redirect} from "react-router-dom"


import "./App.css";
import { Main } from "./components/Main";

function App() {
  const { selectedCliente } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <BrowserRouter>
      <Router history={history}>
      <div className="container">
        <div>
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/' component={Header}>
            <Header />
              <Main />
          </PrivateRoute>
        </div>
      </div>
      </Router> 
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
