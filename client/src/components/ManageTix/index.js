import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap"
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import Moment from "react-moment";
import "./style.css";


export default class ManageTix extends Component {
    state = {
        numbers: [],
        gameNo: "",
        no1: "",
        no2: "",
        no3: "",
        no4: "",
        no5: "",
        powerball: "",
    };

    componentDidMount() {
        this.loadNumbers();
        // this.displayRecentNo();
    }

    loadNumbers = () => {
        API.getNumbers()
            .then(res =>
                // this.setState({ numbers: res.data, no1: "", no2: "", no3: "", no4: "", no5: "", powerball: "" })
                this.setState({ ...this.state, numbers: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteNumber = id => {
        API.deleteNumber(id)
            .then(res => this.loadNumbers())
            .catch(err => console.log(err));
    };



    render() {
        return (
            <div className="modal">
                <Modal
                    {...this.props}
                    size="lg"
                    variant="primary"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="manageTix">
                            <b>Hey, POWER<span style={{ color: "red" }}>BALLER! </span> View or Delete Tix Here</b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            <Row>

                                <Col size="md-12 sm-6">
                                    {this.state.numbers.length ? (
                                        <List>
                                            {this.state.numbers.map(number => (
                                                <ListItem key={number._id}>
                                                    <strong style={{ fontFamily: "Quantico" }}>
                                                        <p style={{ color: "red" }}>Game No: {number.gameNo}</p>
                                                        <hr></hr>
                                                        <h4>
                                                            {number.no1} {"-"}
                                                            {number.no2} {"-"}
                                                            {number.no3} {"-"}
                                                            {number.no3} {"-"}
                                                            {number.no4} {"-"}
                                                            {number.no5} {"-"}
                                                            {number.powerball}
                                                        </h4>
                                                        <hr></hr>
                                                        <p style={{ color: "wheat" }}>
                                                            <Moment format="MM/DD/YYYY">{number.date}</Moment>
                                                        </p>
                                                    </strong>

                                                    <DeleteBtn onClick={() => this.deleteNumber(number._id)} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    ) : (
                                            <h3>No Results to Display</h3>
                                        )}
                                </Col>
                            </Row>
                        </Container>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>


        )
    }
}


