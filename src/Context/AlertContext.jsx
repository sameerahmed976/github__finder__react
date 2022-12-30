import React, { createContext, useContext, useReducer } from "react";
import { alertReducer } from "../Reducer/AlertReducer";

const AlertAppContext = createContext();

const initialState = null;

const AlertContext = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: {
        msg,
        type,
      },
    });

    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" });
    }, 2000);
  };

  return (
    <AlertAppContext.Provider value={{ state, setAlert }}>
      {children}
    </AlertAppContext.Provider>
  );
};

export default AlertContext;

const useAlert = () => {
  return useContext(AlertAppContext);
};

export { useAlert };
