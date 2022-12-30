import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AlertContext from "./Context/AlertContext";
import GithubContext from "./Context/GithubContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GithubContext>
      <AlertContext>
        <App />
      </AlertContext>
    </GithubContext>
  </React.StrictMode>
);
