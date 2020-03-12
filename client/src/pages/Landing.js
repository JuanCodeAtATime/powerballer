import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import WinningNum from "./WinningNum";
import Jackpot from "../components/Jackpot/Jackpot";
import PastYrData from "../components/PastYrData";
import Jackpotchart from "../components/Jackpotchart";
import LastDrawDate from "../components/LastDrawDate";
import NextDrawDate from "../components/nextdrawdate.js";
// import { Router } from "express";

function Landing() {
    return (
        <div>
            <Hero>
                <h1 className="logo">POWER<span id="pro">BALLER</span></h1>
                <span>
                    <Link to="/register">

                        <button className="btn-lg" id="btn-sm"
                            style={{ backgroundColor: "blue", color: "whitesmoke" }}>
                            Create Account</button></Link>
                </span>
                <span>
                    <Link to="/login">

                        <button className="btn-lg" id="btn-sm"
                            style={{ backgroundColor: "red", color: "whitesmoke", marginLeft: "3px" }}>
                            Login</button></Link>
                </span>

            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-3" >
                        <Jumbotron> <h3><b>POWERBALL</b></h3><hr></hr>
                            <h5 style={{ color: "red" }}>
                                <em><b>CURRENT JACKPOT</b></em></h5>
                            <h2 style={{
                                backgroundColor: "white",
                                borderRadius: "5px",
                                border: "solid red 1px"
                            }}>
                                <Jackpot />
                            </h2>
                            <br></br>
                        </Jumbotron>
                    </Col>
                    <Col size="md-5">
                        <Jumbotron> <h3><b>LATEST DRAW DATE</b></h3><hr></hr>
                            <h4><LastDrawDate></LastDrawDate></h4>
                            <h4><WinningNum></WinningNum></h4>
                            <br></br>
                            <Link>
                                <iframe
                                    className="iframe"
                                    title="Latest Powerball Draw"
                                    src="https://www.youtube.com/embed?max-results=1&showinfo=0&rel=0&listType=user_uploads&list=PowerbaLL39"
                                    allowFullScreen
                                    style={{ width: "98%" }}
                                >
                                </iframe></Link>
                            <hr></hr>
                        </Jumbotron>

                    </Col>

                    <Col size="md-4" >
                        <Jumbotron> <h3><b>NEXT DRAW DATE</b></h3><hr></hr>
                            <h4 style={{
                                backgroundColor: "white",
                                borderRadius: "5px",
                                border: "solid red 1.5px"
                            }}><b><NextDrawDate></NextDrawDate></b></h4>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-6" >

                        <div
                            style={{ height: "auto", clear: "both", paddingTop: 10, textAlign: "center", borderTop: "solid blue 25px" }}
                            className="jumbotron"
                        > <h3><b>JACKPOTS IN 2019</b></h3>
                            <hr></hr>
                            <PastYrData></PastYrData>

                        </div>
                    </Col>
                    <Col size="md-6" >

                        <div
                            style={{ height: "auto", clear: "both", paddingTop: 10, textAlign: "center", borderTop: "solid blue 25px" }}
                            className="jumbotron"
                        > <h3><b>CURRENT JACKPOT TRACKING</b></h3>
                            <hr></hr>
                            <Jackpotchart></Jackpotchart>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;
