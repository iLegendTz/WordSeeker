import React from "react";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Word Seeker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive && "navbar__active")
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive && "navbar__active")
                }
                to="/FAQ"
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
