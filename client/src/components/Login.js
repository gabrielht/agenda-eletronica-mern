import React, { useState } from "react";
import * as firebase from "firebase";
import GoogleButton from "react-google-button";
import { STORAGE_KEY } from "../utils/auth";
import history from "./History";
import { BrowserRouter } from "react-router-dom";
import Swal from "sweetalert2";

// const routeChange = useHistory()

const config = {
  apiKey: "AIzaSyBJrCTtEEnBG3SPcZo4ArUnJQZD4J9QPMU",
  authDomain: "tcc-senai-e2ee1.firebaseapp.com",
  databaseURL: "https://tcc-senai-e2ee1.firebaseio.com",
  projectId: "tcc-senai-e2ee1",
  storageBucket: "tcc-senai-e2ee1.appspot.com",
  messagingSenderId: "277001947545",
  appId: "1:277001947545:web:6f258c30e37c43d867eb08",
  measurementId: "G-WLDRJSVYMN",
};

export default !firebase.apps.length ? firebase.initializeApp(config).firestore() : firebase.app().firestore();

export const Login = () => {
  const [EmailLogin, setEmailLogin] = useState("");
  const [SenhaLogin, setSenhaLogin] = useState("");

  const register = () => {
    let auth = firebase.auth();

    auth
      .createUserWithEmailAndPassword(EmailLogin, SenhaLogin)
      .then((UserInfo) => {
        console.log(UserInfo);
        Swal.fire({
          icon: "success",
          title: "Usuário criado com sucesso!",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(EmailLogin, SenhaLogin)
      .then(function (result) {
        // debugger
        let user = result.user;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        history.push("/");
        window.location.reload(false);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Inválido!",
        });
        console.error(error);
      });
  };

  let registerWithGoogle = function () {
    // localStorage.removeItem('UserInfo');
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        let user = result.user;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        history.push("/");
        window.location.reload(false);
      });
  };

  return (
    <BrowserRouter>
      <div className="text-center">
        <form className="text-left mt-5 pt-5 d-inline-block w-50" onSubmit={login}>
          <div className="form-group col-md-12">
            <label htmlFor="nome">Email</label>
            <input id="EmailLogin" className="form-control" type="email" name="" value={EmailLogin} onChange={(e) => setEmailLogin(e.target.value)} placeholder="Email" required />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="email">Password</label>
            <input id="SenhaLogin" className="form-control" type="password" name="" value={SenhaLogin} onChange={(e) => setSenhaLogin(e.target.value)} placeholder="Password" required minLength={6} />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => register()}>
              Registre-se
            </button>
          </div>

          <div className="mt-5 text-center">
            <div>Ou entre com:</div>
            <div className="d-flex justify-content-center">
              <GoogleButton onClick={() => registerWithGoogle()} />
            </div>
          </div>
        </form>
      </div>
    </BrowserRouter>
  );
};
