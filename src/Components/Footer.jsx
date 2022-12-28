import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="footer__text">
          Copyright &copy; {new Date().getFullYear()} Github Finder . All right
          reversed
        </p>
      </footer>
    </>
  );
};

export default Footer;
