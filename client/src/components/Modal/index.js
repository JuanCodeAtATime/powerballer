import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap"
import Powerballinput from "../../pages/Members";
import "./style.css";

// The ...props means, spread all of the passed props onto this element


// That way we don't have to define them all individually
export default class ModalInput extends Component {


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
                        <Modal.Title id="enterTixNo" style={{ fontFamily: "Arial" }}>
                            <p style={{ fontFamily: "Quantico", color: "blue" }}><b>POWER<span style={{ color: "red" }}>BALLER</span></b></p>
                            <b>All fields required for submission.
                              
                            </b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{lineHeight:"0.5"}}>
                        <h4>Instructions:</h4>  
                        <ul>
                            <li>-For one digit numbers, add 0 (e.g. "01", not "1").</li>
                            <li>-Add game or reference number for better tracking.</li>
                        </ul>                 
                 
                        <Powerballinput></Powerballinput>
                        <Button variant="primary" onClick={this.props.onHide}>Close</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        
                    </Modal.Footer>
                </Modal>
            </div>


        )
    }
}


