import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import WinningNum from "./WinningNum";
import Countdown from "../components/Countdown";
import Jackpot from "../components/Jackpot/Jackpot";
import NextDraw from "../components/NextDrawDate";
import PastYrData from "../components/PastYrData";
import Jackpotchart from "../components/Jackpotchart";
// import { Router } from "express";

function Landing() {
    return (
        <div>
            <Hero>
                <h1 className="logo">POWERBALL <span id="pro">PRO</span></h1>
                {/* <h4 className="tagline">BECAUSE WINNING IS A TEAM SPORT</h4> */}
                <span><h2 style={{ color: "red" }}>Next Drawing: <Countdown
                    timeTillDate="03/06/2020"
                    timeFormat="MM/DD/YYYY, h:mm a" /></h2>
                </span>


                {/*   
                
                This is for button in center of Hero element
                <Link
                    to="/register">

                    <button className="hero-button">Become A Member</button></Link> */}
                {/* <Countdown
                    timeTillDate="02 29 2020, 11:00 pm"
                    timeFormat="MM DD YYYY, h:mm a"
                /> */}
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-4">
                        <Jumbotron> <h3><b>POWERBALL</b></h3><hr></hr>
                            <h4 style={{ color: "red" }}>
                                <em>Current Jackpot</em></h4>
                            <Jackpot />
                            <br></br>
                        </Jumbotron>
                    </Col>
                    <Col size="md-4">
                        <Jumbotron> <h3><b>LATEST DRAWING</b></h3><hr></hr>
                            <h4><WinningNum></WinningNum></h4>
                            <br></br>
                            <Link>
                                <iframe
                                    className="iframe"
                                    src="https://www.youtube.com/embed?max-results=1&showinfo=0&rel=0&listType=user_uploads&list=PowerbaLL39"
                                    allowfullscreen
                                    style={{ width: "98%" }}
                                >
                                </iframe></Link>
                            <hr></hr>
                        </Jumbotron>

                    </Col>

                    <Col size="md-4" >
                        <Jumbotron> <h3><b>NEXT DRAW DATE</b></h3><hr></hr>
                            <NextDraw></NextDraw>
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
