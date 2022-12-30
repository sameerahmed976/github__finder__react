import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ login, avatar_url }) => {
  return (
    <>
      <article className="user__card">
        <img src={avatar_url} alt="avatar" className="user__image" />
        <div className="user__content">
          <h2 className="user__title">{login}</h2>
          <Link to={`/user/${login}`} className="user__visit">
            visit Profile
          </Link>
        </div>
      </article>
    </>
  );
};

User.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
};

export default User;
