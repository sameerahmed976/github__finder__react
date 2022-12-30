import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducer/reducer";
const AppContext = createContext();

// const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_URL;

const initialState = {
  isLoading: false,
  data: [],
  user: {},
};

const GithubContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );

      const { items } = await response.json();
      // console.log(
      //   `* ~ file: GithubContext.jsx:33 ~ searchUsers ~ items`,
      //   items
      // );
      // console.log(`* ~ file: UserList.jsx:18 ~ fetchData ~ data`, data);
      dispatch({ type: "DISPLAY", payload: items });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (login) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_GITHUB_URL}/users/${login}`,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );

      const { items } = await response.json();
      // console.log(
      //   `* ~ file: GithubContext.jsx:33 ~ searchUsers ~ items`,
      //   items
      // );
      // console.log(`* ~ file: UserList.jsx:18 ~ fetchData ~ data`, data);
      dispatch({ type: "DISPLAY", payload: items });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <AppContext.Provider value={{ ...state, searchUsers, handleClear }}>
      {children}
    </AppContext.Provider>
  );
};

export default GithubContext;

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext };
