import React from "react";
import { Link } from "react-router-dom";
import Countdown from "../Countdown";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <Link className="navbar-brand" href="#" to="/">
        POWERBALL <span id="pro">PRO</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">

            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/landing"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
              <span className="sr-only">(current)</span>
            </Link>

          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li> */}
        </ul>
        <span className="navbar-text">
          <Link to="/register">

            <button className="btn-sm" id="btn-sm" style={{ backgroundColor: "red", color: "whitesmoke" }}>Become A Member</button></Link>

          {/* <Countdown placeholder="Next Drwaing" timeTillDate="03/01/2020, 12:00 pm"
            timeFormat="MM/DD/YYYY, h:mm a" /> */}
        </span>
      </div>
    </nav>


  );
}

export default Navbar;
