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
                        <Modal.Title id="contained-modal-title-vcenter">
                            <b>Hey, POWER<span style={{ color: "red" }}>BALLER! </span> Enter Your Ticket #s</b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Powerballinput></Powerballinput>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>


        )
    }
}


