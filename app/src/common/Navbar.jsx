import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="title">College Finder</h1>
        </Link>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
