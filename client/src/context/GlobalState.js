import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  clientes: [
    {id:1, nome: "Joao", email:"joao@gmail.com"},
    {id:2, nome: "Maria", email:"maria@gmail.com"},
    {id:3, nome: "Enzo", email:"enzo@gmail.com"}
  ],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  return (<GlobalContext.Provider value={{
    clientes: state.clientes,
    error: state.error,
    loading: state.loading,
  }}>
    {children}
  </GlobalContext.Provider>);
}