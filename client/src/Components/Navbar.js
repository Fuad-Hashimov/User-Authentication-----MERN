import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link" href="#">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link" href="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact" className="nav-link" href="#">
                  Contact
                </NavLink>
              </li>
            </ul>
            <a href="#" className="navbar-brand fw-bolder fs-4 mx-auto">
              LOGO
            </a>
            <NavLink
              to="/login"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
            >
              <FaSignInAlt className="me-2" />
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <FaUserPlus className="me-2" />
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
