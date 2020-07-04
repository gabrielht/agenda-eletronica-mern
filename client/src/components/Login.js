import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import * as firebase from 'firebase';
import GoogleButton from 'react-google-button'

const config = {
    apiKey: "AIzaSyBJrCTtEEnBG3SPcZo4ArUnJQZD4J9QPMU",
    authDomain: "tcc-senai-e2ee1.firebaseapp.com",
    databaseURL: "https://tcc-senai-e2ee1.firebaseio.com",
    projectId: "tcc-senai-e2ee1",
    storageBucket: "tcc-senai-e2ee1.appspot.com",
    messagingSenderId: "277001947545",
    appId: "1:277001947545:web:6f258c30e37c43d867eb08",
    measurementId: "G-WLDRJSVYMN"
  };

  export default !firebase.apps.length ? firebase.initializeApp(config).firestore() : firebase.app().firestore();

export const Login = () => {
  const [EmailLogin, setEmailLogin] = useState("");
  const [SenhaLogin, setSenhaLogin] = useState("");

  const Register = (e) => {
    e.preventDefault();
    var ClientData = {
        EmailLogin,SenhaLogin
      }
  
      var auth = firebase.auth();
  
      auth.createUserWithEmailAndPassword(EmailLogin,SenhaLogin).then(UserInfo => {
        console.log(UserInfo);
      }).catch(function(error){
        console.log('Error');
        console.log(error);
      })
      
   
      console.log(ClientData);
  }

  var login = function(){
    // firebase.auth().tenantId = ‘TENANT_PROJECT_ID’;

    // All future sign-in request now include tenant ID.
    firebase.auth().signInWithEmailAndPassword(EmailLogin, SenhaLogin)
      .then(function(result) {
          console.log(result);
        // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
      }).catch(function(error) {
        // Handle error.
        console.log(error);
      });
  }

  var RegisterWithGoogle = function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    });
  }


    return (
        <form class="form-signin" onSubmit={Register}>   
        <div className="form-row col-md-12">
          <div className="form-group col-md-6">
            <label htmlFor="nome">Email</label>
            <input id="EmailLogin" className="form-control" type="email" name="" value={EmailLogin} onChange={(e) => setEmailLogin(e.target.value)} placeholder="Email" required />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">password</label>
            <input id="SenhaLogin" className="form-control" type="password" name="" value={SenhaLogin} onChange={(e) => setSenhaLogin(e.target.value)} placeholder="Password" />
          </div>
        </div>
        <button type="button" className="btn btn-secondary" onClick={() => {  login() }}> 
          Login
        </button>
        <button type="submit" className="btn btn-primary">
         Register
        </button>
        <GoogleButton onClick={() => {  RegisterWithGoogle() }}/>
      </form>
    )
}
