import React from "react";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Powerballs from "../components/Powerballs";

function Landing() {
    return (
        <div>
            <Hero>
                <h1>POWERBALL <span id="pro">PRO</span></h1>
                <h3>BECAUSE WINNING IS A TEAM SPORT</h3>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-4">
                        <Jumbotron> <h3>POWERBALL</h3><hr></hr>
                            <h4 class="jackpot">$50 MILLION</h4>
                            <p class="win-date-announcement">Winning numbers for Feb 15, 2020</p>
                            <Powerballs></Powerballs>

                        </Jumbotron>
                    </Col>
                    <Col size="md-4">
                        <Jumbotron> <h3>PB<span id="pro">PRO</span> CHAT</h3><hr></hr>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                                consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                                bulum suscipit nunc non egestas tristique. </p></Jumbotron>
                    </Col>

                    <Col size="md-4">
                        <Jumbotron> <h3>UPCOMING EVENTS</h3><hr></hr>
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
