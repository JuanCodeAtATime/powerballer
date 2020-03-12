import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "./style.css"

class Powerballinput extends Component {
    state = {
        numbers: [],
        recentNumber: '',
        // gameNo: "",
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
                this.setState({ ...this.state, numbers: res.data, recentNumber: res.data[0] })
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
            ...this.state,
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.gameNo &&
            this.state.no1 && this.state.no2 &&
            this.state.no3 && this.state.no4 &&
            this.state.no5 && this.state.powerball) {
            API.saveNumber({
                gameNo: this.state.gameNo,
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
                    <Col size="md-12 sm-6">

                        <form className="noInput">
                            <div className="row center" >
                                <input
                                    style={{
                                        height: "20px",
                                        float: "left",
                                        backgroundColor: "whitesmoke",
                                        width: "25%",
                                        border: "solid red 2px",
                                        borderRadius: "4px",
                                        padding: "4px"

                                    }}
                                    className="gameNo"
                                    value={this.state.gameNo}
                                    onChange={this.handleInputChange}
                                    name="gameNo"

                                    placeholder="Ref Number (required)"
                                    type="number"
                                    fontSize="10px"
                                />
                            </div>
                            <Input
                                className="whiteballs"
                                value={this.state.no1}
                                onChange={this.handleInputChange}
                                name="no1"
                            />
                            <Input
                                className="whiteballs"
                                value={this.state.no2}
                                onChange={this.handleInputChange}
                                name="no2"

                            />
                            <Input
                                className="whiteballs"
                                value={this.state.no3}
                                onChange={this.handleInputChange}
                                name="no3"

                            />
                            <Input
                                className="whiteballs"
                                value={this.state.no4}
                                onChange={this.handleInputChange}
                                name="no4"

                            />
                            <Input
                                className="whiteballs"
                                value={this.state.no5}
                                onChange={this.handleInputChange}
                                name="no5"

                            />
                            <Input
                                className="whiteballs powerball-input"
                                value={this.state.powerball}
                                onChange={this.handleInputChange}
                                name="powerball"

                            />

                            <FormBtn
                                disabled={!(this.state.gameNo && this.state.no1 && this.state.no2 &&
                                    this.state.no3 && this.state.no4 &&
                                    this.state.no5 && this.state.powerball
                                )}
                                onClick={this.handleFormSubmit}

                            >
                                Enter
              </FormBtn>
                        </form>
                    </Col>
                    {/* <Col size="md-6 sm-6">
                        {this.state.numbers.length ? (
                            <List>
                                {this.state.numbers.map(number => (
                                    <ListItem key={number._id}>
                                        <Link to={"/numbers/" + number._id}>
                                            <strong>
                                                {number.no1} {"-"}
                                                {number.no2} {"-"}
                                                {number.no3} {"-"}
                                                {number.no3} {"-"}
                                                {number.no4} {"-"}
                                                {number.no5} {"-"}
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
                    </Col> */}
                </Row>
            </Container>
        );
    }
}

export default Powerballinput;

