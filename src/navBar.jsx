import logo from "./logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={logo} alt="" style={{ height: "50px", width: "50px" }} />
            React-Docker
          </Link>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">AboutUs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">ContactUs</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                disabled={true}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
