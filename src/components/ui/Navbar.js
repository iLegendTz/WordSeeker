import React from "react";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid">
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
