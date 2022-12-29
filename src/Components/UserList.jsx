import React, { useEffect, useState } from "react";
import User from "./User";

const UserList = () => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });

      const data = await response.json();
      console.log(`* ~ file: UserList.jsx:18 ~ fetchData ~ data`, data);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    </>
  );
};

export default UserList;
