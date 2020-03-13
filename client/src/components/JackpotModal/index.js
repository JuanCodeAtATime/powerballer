import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Jackpotchart from "../Jackpotchart";
import "./style.css"

export default class JackpotModal extends Component {

    render() {
        return (
            <div className="modal">
                <Modal
                    {...this.props}
                    size="md"
                    variant="primary"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="jpChart">
                            <p style={{ fontFamily: "Quantico", color: "blue" }}><b>POWER<span style={{ color: "red" }}>BALLER</span></b></p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Jackpotchart></Jackpotchart>
                        <Button variant="primary" onClick={this.props.onHide}>Close</Button>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>


        )
    }
}


