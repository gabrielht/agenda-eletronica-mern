import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { GlobalProvider } from "./context/GlobalState";
import history from "./components/History";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Main } from "./components/Main";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Router history={history}>
          <div className="container">
            <div>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Header}>
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
