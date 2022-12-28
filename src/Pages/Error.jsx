import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="error">
        <h2 className="error__title">404! Page not found</h2>
        <Link to="/" className=" btn btn--error">
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default Error;
