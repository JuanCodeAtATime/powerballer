import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import "./style.css"



function Landing() {
    return (
        <div style={{ marginTop: "20px" }}>

            <Hero>
                <Row className="alignContent">
                    <h2 className="logo powerballer">POWER<span id="pro">BALLER</span></h2>

                </Row>

                <Row className="alignContent">
                    <span>
                        <Link to="/register">

                            <button id="landingBtnLeft"
                                style={{
                                    backgroundColor: "blue",
                                    color: "whitesmoke",
                                    borderRadius: "12px",
                                    padding: "4.5px"
                                }}>
                                signup</button></Link>
                    </span>
                    <span>
                        <Link to="/login">

                            <button id="landingBtnRight"
                                style={{
                                    backgroundColor: "red",
                                    color: "whitesmoke",
                                    marginLeft: "9px",
                                    borderRadius: "12px",
                                    padding: "4.5px"
                                }}>
                                login</button></Link>
                    </span>
                </Row>
                <Row className="alignContent landingIcons"
                    style={{
                        marginTop: "70px",
                        marginBottom: "0"
                    }}>
                    <Col size="md">
                        <FontAwesomeIcon icon={faSearchDollar} style={{ fontSize: "45px", color: "whitesmoke" }} />
                        <div style={{ color: "whitesmoke" }}>
                            <h5>DISCOVER</h5>
                            <p style={{ color: "whitesmoke" }}><em>Create and track your lottery gaming trends.</em></p>
                        </div>

                    </Col>
                    <Col size="md">
                        <FontAwesomeIcon icon={faChartLine} style={{ fontSize: "45px", color: "whitesmoke" }} />
                        <div style={{ color: "whitesmoke" }}>
                            <h5>DATA-DRIVEN</h5>
                            <p style={{ color: "whitesmoke" }}><em>See real-time Jackpot amount changes.</em></p>
                        </div>
                    </Col>
                    <Col size="md">
                        <FontAwesomeIcon icon={faMoneyBillAlt} style={{ fontSize: "45px", color: "whitesmoke" }} />
                        <div style={{ color: "whitesmoke" }}>
                            <h5>LOTTERY GAMING</h5>
                            <p style={{ color: "whitesmoke" }}><em>See the latest drawn numbers. $ignup today!</em></p>
                        </div>
                    </Col>
                </Row>
            </Hero>


        </div >
    );
}

export default Landing;
