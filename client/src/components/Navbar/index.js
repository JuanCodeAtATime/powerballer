import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Jackpot from "../Jackpot/Jackpot";
import "./style.css";


// import "bootstrap/dist/css/bootstrap.min.css";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (

    <Navbar className="navbar">
      <Navbar.Brand bg="black" variant="black">
        <Link className="powerballer" to="/">
          <h3 style={{ textDecorationLine: "none", textDecoration: "none" }}>POWER<span id="pro">BALLER</span></h3>
        </Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text variant="white">
          <h4 id="navJackpot" style={{ color: "red" }}>Current Jackpot: <Jackpot /></h4>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
