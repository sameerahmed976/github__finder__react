import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducer/reducer";
const AppContext = createContext();

// const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_URL;

const initialState = {
  isLoading: false,
  data: [],
  user: {},
  repos: [],
};

const GithubContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default GithubContext;

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext };
