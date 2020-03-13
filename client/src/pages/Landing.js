import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
// import Jumbotron from "../components/Jumbotron";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import WinningNum from "./WinningNum";
// import LastDrawDate from "../components/LastDrawDate";
// import NextDrawDate from "../components/nextdrawdate.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.css"


function Landing() {
    return (
        <div>
            <Hero>
                <h2 className="logo">POWER<span id="pro">BALLER</span></h2>
                <span>
                    <Link to="/register">

                        <button id="landingBtnLeft"
                            style={{
                                backgroundColor: "blue",
                                color: "whitesmoke",
                                borderRadius: "8px",
                                padding: "4.5px"
                            }}>
                            Create Account</button></Link>
                </span>
                <span>
                    <Link to="/login">

                        <button id="landingBtnRight"
                            style={{
                                // hover: { transform: 'scale(1.7)', transition: 'all .2s ease-in-out' },
                                backgroundColor: "red",
                                color: "whitesmoke",
                                marginLeft: "9px",
                                borderRadius: "8px",
                                padding: "4.5px"
                            }}>
                            Login</button></Link>
                </span>
                <div className="container">
                    <div className="row justify-content-center"
                        style={{
                            marginTop: "70px",
                            marginBottom: "0",
                            textAlign: "center",
                            alignContent: "center"
                        }}>
                        <div className="col-md-3" style={{ textAlign: "center", alignContent: "center" }}>
                            <FontAwesomeIcon icon={faSearchDollar} style={{ fontSize: "80px", color: "whitesmoke" }} />
                            <div style={{ color: "white" }}>
                                <h4>DISCOVER</h4>
                                <p style={{ color: "whitesmoke" }}><em>Create and track your lottery gaming trends.</em></p>
                            </div>

                        </div>
                        <div className="col-md-3" >
                            <FontAwesomeIcon icon={faChartLine} style={{ fontSize: "80px", color: "whitesmoke" }} />
                            <div style={{ color: "white" }}>
                                <h4>DATA-DRIVEN</h4>
                                <p style={{ color: "whitesmoke" }}><em>See real-time Jackpot amount changes.</em></p>
                            </div>
                        </div>
                        <div className="col-md-3" >
                            <FontAwesomeIcon icon={faMoneyBillAlt} style={{ fontSize: "80px", color: "whitesmoke" }} />
                            <div style={{ color: "white" }}>
                                <h4>LOTTERY GAMING</h4>
                                <p style={{ color: "whitesmoke" }}><em>Get instant prize calculation. $ignup today!</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>
            {/* <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-5">
                        <Jumbotron> <h3 className="landingH3"><b>LATEST DRAW DATE</b></h3><hr></hr>
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

                    <Col size="md-5" >
                        <Jumbotron> <h3 className="landingH3"><b>NEXT DRAW DATE</b></h3><hr></hr>
                            <h4 style={{
                                backgroundColor: "white",
                                borderRadius: "5px",
                                border: "solid red 1.5px"
                            }}><b><NextDrawDate></NextDrawDate></b></h4>
                        </Jumbotron>
                    </Col>
                </Row>


            </Container> */}
        </div>
    );
}

export default Landing;
