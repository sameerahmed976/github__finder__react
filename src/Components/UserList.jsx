import React, { useEffect } from "react";
import { useAppContext } from "../Context/GithubContext";
import User from "./User";

const UserList = () => {
  const { isLoading, data, handleClear } = useAppContext();

  if (isLoading) {
    return (
      <section className="main__loading">
        <h2 className="loading">Loading...</h2>
      </section>
    );
  }

  return (
    <>
      <section className="user">
        {data.map((item) => {
          return <User key={item.id} {...item} />;
        })}
      </section>

      {data.length > 0 && (
        <button className="btn btn--clear" onClick={handleClear}>
          clear
        </button>
      )}
    </>
  );
};

export default UserList;
