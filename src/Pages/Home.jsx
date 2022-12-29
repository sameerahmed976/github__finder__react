import React from "react";
import UserList from "../Components/UserList";
import Footer from "../Components/Footer";
const Home = () => {
  // console.log(import.meta.env.VITE_GITHUB_TOKEN);
  // console.log(import.meta.env.VITE_GITHUB_URL);

  return (
    <>
      <main className="home__main">
        <UserList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
