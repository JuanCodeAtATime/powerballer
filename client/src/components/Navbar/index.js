import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import NextDraw from "../RenderCountdown";
import "moment";
// import "bootstrap/dist/css/bootstrap.min.css";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <Link className="navbar-brand" href="#" to="/">
        POWER<span id="pro">BALLER</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">

            {/* <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/landing"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
              <span className="sr-only">(current)</span>
            </Link> */}

          </li>
          <li className="nav-item">
            {/* <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link> */}
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li> */}
        </ul>
        <span className="navbar-text">
          <NextDraw></NextDraw>
        </span>
      </div>
    </nav>


  );
}

export default Navbar;
