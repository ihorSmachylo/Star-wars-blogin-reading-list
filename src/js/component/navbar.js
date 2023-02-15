import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-3">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 text-light">Star Wars</span>
          <img height="70"  src="https://www.gamerfocus.co/wp-content/uploads/2018/03/Star-Wars-Logo.png"/>
        </Link>
        <div className="ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >Favorites
            </a>
            <ul className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            </ul>
          </li>
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
