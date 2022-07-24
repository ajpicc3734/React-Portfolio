import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="navbar">
        <h1>Andrew Piccolo</h1>
        <ul>
          <li className="nav-link">
            <a href="#about">About</a>
          </li>
          <li className="nav-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
