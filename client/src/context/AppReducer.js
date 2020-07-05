export default (state, action) => {
  switch (action.type) {
    case "GET_CLIENTES":
      return {
        ...state,
        loading: false,
        clientes: action.payload,
      };
    case "DELETE_CLIENTE":
      return {
        ...state,
        clientes: state.clientes.filter((cliente) => cliente._id !== action.payload),
      };
    case "ADD_CLIENTE":
      return {
        ...state,
        clientes: [...state.clientes, action.payload],
      };
    case "SELECT_CLIENTE":
      return {
        ...state,
        selectedCliente: action.payload,
      };
    case "GET_COMENTARIOS":
      return {
        ...state,
        comentarios: action.payload,
      };
    case "ADD_COMENTARIO":
      return {
        ...state,
        comentarios: [...state.comentarios, action.payload],
      };
    case "CLIENTE_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
