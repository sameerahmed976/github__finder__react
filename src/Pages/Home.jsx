import React from "react";
import UserList from "../Components/UserList";
import Footer from "../Components/Footer";
import UserSearch from "../Components/UserSearch";
import Alert from "../Components/Alert";
const Home = () => {
  // console.log(import.meta.env.VITE_GITHUB_TOKEN);
  // console.log(import.meta.env.VITE_GITHUB_URL);

  return (
    <>
      <main className="home__main">
        <Alert />
        <UserSearch />
        <UserList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
