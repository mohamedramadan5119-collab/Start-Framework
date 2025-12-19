import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light position-fixed top-0 z-2 start-0 end-0 py-3">
      <div className="container">
        <NavLink
          className="navbar-brand text-uppercase text-white fw-bolder fs-2"
          to=""
        >
          Start Framework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase text-white fw-bold p-2 mx-3 rounded-2 mb-3 mt-3 my-lg-0"
                aria-current="page"
                to="about"
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase text-white fw-bold p-2 mx-3 rounded-2 mb-3 mb-lg-0"
                to="portfolio"
              >
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase text-white fw-bold p-2 mx-3 rounded-2  mb-lg-0"
                to="contact"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
