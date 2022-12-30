import React from "react";
import { useAlert } from "../Context/AlertContext";
import Svg from "./Svg";

const Alert = () => {
  const { state } = useAlert();
  return (
    <>
      {state !== null && (
        <>
          {state.type === "error" && (
            <>
              <div className="error__text">
                <Svg />
                <strong>{state?.msg}</strong>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Alert;
