import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap"
import { Col, Row, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import ReactTooltip from 'react-tooltip'
import { ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import Moment from "react-moment";
import "./style.css";

// The ...props means, spread all of the passed props onto this element


// That way we don't have to define them all individually
export default class ModalInput extends Component {
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
                this.setState({ numbers: res.data[0].numbers, gameNo: "", no1: "", no2: "", no3: "", no4: "", no5: "", powerball: "" })
                // this.setState({ ...this.state, numbers: res.data })
            )
            .catch(err => console.log(err));    };

   

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


    deleteNumber = id => {      
        const currentNumbers = this.state.numbers;   
        API.deleteNumber(id)
            .then(res =>                 
                this.setState({ 
                    numbers: currentNumbers.filter(number => number._id !== id) }),                                     
                this.loadNumbers())
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
                    style={{'max-height': 'calc(100vh - 5px)', 'overflowY': 'auto'}}
                >
                    <Modal.Header closeButton>
                      
                    </Modal.Header>
                    <Modal.Body style={{lineHeight:"0.5"}}>
                    <Modal.Title id="enterTixNo" style={{ fontFamily: "Arial" }}>
                            <p style={{ fontFamily: "Quantico", color: "blue", fontSize:"2rem" }}>
                                <b>POWER<span style={{ color: "red" }}>BALLER</span></b>
                            </p>
                            <b>All fields required for submission.
                              
                            </b>
                        </Modal.Title>                    
                       
                 
                        <Container fluid>
                <Row>
                    <Col size="md-12 sm-6">

                        <form className="noInput">
                            <div className="row center" >
                                <input 
                                    style={{
                                        height: "20px",                                       
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
                                    placeholder="Required field"
                                    type="number"
                                    fontSize="10px"
                                    data-tip="Enter Reference #"
                                    data-text-color="red"
                                />
                                <ReactTooltip />
                            </div>
                            <Input
                                className="whiteballs"
                                maxLength={2}
                                minLength={2}
                                type="text"
                                value={this.state.no1}
                                onChange={this.handleInputChange}
                                name="no1"
                            />
                            <Input
                                className="whiteballs"
                                maxLength={2}
                                minLength={2}
                                type="text"
                                value={this.state.no2}
                                onChange={this.handleInputChange}
                                name="no2"

                            />
                            <Input
                                className="whiteballs"
                                maxLength={2}
                                minLength={2}
                                type="text"
                                value={this.state.no3}
                                onChange={this.handleInputChange}
                                name="no3"

                            />
                            <Input
                                className="whiteballs"
                                maxLength={2}
                                minLength={2}
                                type="text"
                                value={this.state.no4}
                                onChange={this.handleInputChange}
                                name="no4"

                            />
                            <Input
                                className="whiteballs"
                                maxLength={2}
                                minLength={2}
                                type="text"
                                value={this.state.no5}
                                onChange={this.handleInputChange}
                                name="no5"

                            />
                            <Input
                                className="whiteballs powerball-input"
                                maxLength={2}
                                minLength={2}
                                type="text"
                                value={this.state.powerball}
                                onChange={this.handleInputChange}
                                name="powerball"

                            />

                            <FormBtn
                                className="saveNo"
                                disabled={!(this.state.gameNo && this.state.no1 && this.state.no2 &&
                                    this.state.no3 && this.state.no4 &&
                                    this.state.no5 && this.state.powerball
                                )}
                                onClick={this.handleFormSubmit}


                            >
                                Enter
              </FormBtn>
                        </form>
                        <br></br>

                        <div >
                {this.state.numbers.length ? (
                  
                    <div>
                        {this.state.numbers.slice(0).reverse().map(number => (
                            <ListItem style={{border:"solid red 2px"}} key={number._id}>
                                
                                <strong style={{ fontFamily: "Quantico" }}>
                                    <h4 style={{ color: "black" }}><b>Game No:</b> {number.gameNo}
                                        <hr></hr>
                                        {number.no1} {"-"}
                                        {number.no2} {"-"}
                                        {number.no3} {"-"}
                                        {number.no4} {"-"}
                                        {number.no5} {"-"}
                                        <span style={{
                                            backgroundColor: "red",
                                            color: "white",
                                            borderRadius: "50%",
                                            padding: "3px",
                                            marginTop: "2px"
                                        }}>
                                            {number.powerball}
                                        </span>
                                    </h4>
                                    <hr></hr>
                                    <h6>
                                        <b>Date: </b><Moment format="MM/DD/YYYY, h:mm a">{number.date}</Moment>
                                    </h6>
                                </strong>
                              
                                <DeleteBtn onClick={() => this.deleteNumber(number._id)} />
                            </ListItem>
                        ))}
                 
                    </div>
                ) : (
                        <h3>Enter Ticket #s</h3>
                    )}

            </div>
                    </Col>

                </Row>
            </Container>
                        <Button variant="primary" onClick={this.props.onHide}>Close</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        
                    </Modal.Footer>
                </Modal>
            </div>


        )
    }
}


