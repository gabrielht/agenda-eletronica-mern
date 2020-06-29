import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  clientes: [],
  comentarios: [
    { id: 1, comentario: "Teste Comentario 1" },
    { id: 2, comentario: "Teste Comentario 2" },
    { id: 3, comentario: "Teste Comentario 3", valor: "195,90" },
  ],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getClientes() {
    try {
      const res = await axios.get("/api/v1/clientes");

      dispatch({
        type: "GET_CLIENTES",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "CLIENTES_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addCliente(cliente) {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/clientes", cliente, config);
      dispatch({
        type: "ADD_CLIENTE",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "CLIENTES_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteCliente(id) {
    try {
      await axios.delete(`/api/v1/clientes/${id}`);
      dispatch({
        type: "DELETE_CLIENTE",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "CLIENTES_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  function selectCliente(cliente) {
    dispatch({
      type: "SELECT_CLIENTE",
      payload: cliente,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        clientes: state.clientes,
        comentarios: state.comentarios,
        error: state.error,
        loading: state.loading,
        getClientes,
        addCliente,
        deleteCliente,
        selectCliente,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
