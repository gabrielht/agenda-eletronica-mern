import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import InputMask from 'react-input-mask';
import * as firebase from 'firebase';
import {STORAGE_KEY} from '../utils/auth';

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

export const AddCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [EmailLogin, setEmailLogin] = useState("");
  const [SenhaLogin, setSenhaLogin] = useState("");

  const { addCliente } = useContext(GlobalContext);


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

  function clearForm() {
    setNome("");
    setEmail("");
    setTelefone("");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem('Usuario'));
    let createdBy = user.uid;
    debugger;
    const newCliente = {
      nome,
      email,
      telefone,
      createdBy, 
    };

    // debugger;
    addCliente(newCliente);
    clearForm();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-row col-md-12">
          <div className="form-group col-md-6">
            <label htmlFor="nome">Nome</label>
            <input id="nome" className="form-control" type="text" name="" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input id="email" className="form-control" type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="telefone">Telefone</label>
          <InputMask id="telefone" mask="(99) 99999-9999" alwaysShowMask={false} className="form-control" type="telefone" name="" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone"/>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">
            Adicionar Cliente
          </button>
        </div>
      </form>
      
    </div>
  );
};
