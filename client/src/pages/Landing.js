import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import WinningNum from "./WinningNum"
// import { Router } from "express";

function Landing() {
    return (
        <div>
            <Hero>
                <h1 className="logo">POWERBALL <span id="pro">PRO</span></h1>
                <h4 className="tagline">BECAUSE WINNING IS A TEAM SPORT</h4>
                <Link
                    to="/register">

                    <button className="hero-button">Become A Member</button></Link>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-4">
                        <Jumbotron> <h3><b>POWERBALL</b></h3><hr></hr>
                            <h4 className="jackpot">$70 MILLION</h4>
                            <h6 style={{ color: "red" }}>
                                <em>Jackpot</em></h6>
                            <br></br>
                            <h4><WinningNum></WinningNum></h4>
                        </Jumbotron>
                    </Col>
                    <Col size="md-4">
                        <Jumbotron> <h3><b>WATCH LATEST DRAWING</b></h3><hr></hr>
                            <Link>
                                <iframe
                                    className="iframe"
                                    src="https://www.youtube.com/embed?max-results=1&showinfo=0&rel=0&listType=user_uploads&list=PowerbaLL39"
                                    allowfullscreen
                                    style={{ width: "98%" }}
                                >
                                </iframe></Link>

                        </Jumbotron>

                    </Col>

                    <Col size="md-4">
                        <Jumbotron> <h3><b>UPCOMING EVENTS</b></h3><hr></hr>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                                consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                                bulum suscipit nunc non egestas tristique. </p></Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;
