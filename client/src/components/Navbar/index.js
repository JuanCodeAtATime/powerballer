import React from "react";
import { Link } from "react-router-dom";
// import Countdown from "../Countdown";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <Link className="navbar-brand" to="/">
        POWERBALL <span id="pro">PRO</span>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/landing"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
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

          <li className="nav-item">
          <Link
              to="/summary"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Season Summary
            </Link>
          </li>

          <li className="nav-item">
          <Link
              to="/admin"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Admin
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/register"
              className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
            >
              Signup
            </Link>
          </li> */}
          {/* <li className="nav-item countdown mr auto" style={{ color: "white" }}>
            <Countdown className="countdown"
              timeTillDate="02 29 2020, 11:00 pm"
              timeFormat="MM DD YYYY, h:mm a"
            />
          </li> */}

        </ul>
      </div>




    </nav>
  );
}

export default Navbar;
