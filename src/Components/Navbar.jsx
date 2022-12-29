import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo__container">
          <div className="logo__image">
            <FaGithub />
          </div>
          <h1 className="logo">Github Finder</h1>
        </Link>

        <ul className="nav__links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active__link" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active__link" : "link")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
