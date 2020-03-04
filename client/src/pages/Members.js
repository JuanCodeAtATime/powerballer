import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Numbers extends Component {
    state = {
        numbers: [],
        no1: "",
        no2: "",
        no3: "",
        no4: "",
        no5: "",
        powerball: "",
    };

    componentDidMount() {
        this.loadNumbers();
    }

    loadNumbers = () => {
        API.getNumbers()
            .then(res =>
                this.setState({ numbers: res.data, no1: "", no2: "", no3: "", no4: "", no5: "", powerball: "" })
            )
            .catch(err => console.log(err));
    };

    deleteNumber = id => {
        API.deleteNumber(id)
            .then(res => this.loadNumbers())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.no1 && this.state.no2 &&
            this.state.no3 && this.state.no4 &&
            this.state.no5 && this.state.powerball) {
            API.saveNumber({
                no1: this.state.no1,
                no2: this.state.no2,
                no3: this.state.no3,
                no4: this.state.no4,
                no5: this.state.no5,
                powerball: this.state.powerball
            })
                .then(res => this.loadNumbers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">

                        <form>
                            <Input
                                value={this.state.no1}
                                onChange={this.handleInputChange}
                                name="no1"
                                placeholder="#1"
                            />
                            <Input
                                value={this.state.no2}
                                onChange={this.handleInputChange}
                                name="no1"
                                placeholder="#2"
                            />
                            <Input
                                value={this.state.no3}
                                onChange={this.handleInputChange}
                                name="no1"
                                placeholder="#3"
                            />
                            <Input
                                value={this.state.no4}
                                onChange={this.handleInputChange}
                                name="no1"
                                placeholder="#4"
                            />
                            <Input
                                value={this.state.no5}
                                onChange={this.handleInputChange}
                                name="no1"
                                placeholder="#5"
                            />
                            <Input
                                value={this.state.powerball}
                                onChange={this.handleInputChange}
                                name="powerball"
                                placeholder="Powerball#"
                            />

                            <FormBtn
                                disabled={!(this.state.no1 && this.state.no2 &&
                                    this.state.no3 && this.state.no4 &&
                                    this.state.no5 && this.state.powerball
                                )}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Book
              </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Past Ticket Numbers</h1>
                        </Jumbotron>
                        {this.state.numbers.length ? (
                            <List>
                                {this.state.numbers.map(number => (
                                    <ListItem key={number._id}>
                                        <Link to={"/numbers/" + number._id}>
                                            <strong>
                                                {number.no1}
                                                {number.no2}
                                                {number.no3}
                                                {number.no4}
                                                {number.no5}
                                                {number.powerball}
                                            </strong>
                                        </Link>
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
        );
    }
}

export default Numbers;
