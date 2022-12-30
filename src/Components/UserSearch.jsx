import React, { useState } from "react";
import { useAlert } from "../Context/AlertContext";
import { useAppContext } from "../Context/GithubContext";

const UserSearch = () => {
  const { searchUsers } = useAppContext();
  const { setAlert } = useAlert();

  //   console.log(`* ~ file: UserSearch.jsx:6 ~ UserSearch ~ data`, data);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text == "") {
      //   alert(`Please enter valid value`);
      setAlert("Please enter something", "error");
    } else {
      //   console.log(text);
      searchUsers(text);
      setText("");
    }
  };

  return (
    <>
      <section className="user">
        <form className="user__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="user__text"
            id="user__text"
            className="user__text"
            placeholder="enter user name"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button className="btn btn--go">Go</button>
        </form>
      </section>
    </>
  );
};

export default UserSearch;
