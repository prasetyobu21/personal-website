import React from "react";
import reactDom from "react-dom";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <div className="nav">
      <a className="webtitle">PRASETYOUTOMO.COM</a>
      <a
        href="https://github.com/prasetyobu21"
        className="href"
        target="_blank"
      >
        GITHUB
      </a>
      <a
        href="https://www.behance.net/prasetyobu43be"
        className="href"
        target="_blank"
      >
        BEHANCE
      </a>
    </div>
  );
};

export default Navbar;
