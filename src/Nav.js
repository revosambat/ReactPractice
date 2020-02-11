import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          <li>About</li>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
