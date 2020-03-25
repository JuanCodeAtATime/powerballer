import React, { Component } from "react";
import { Modal } from "react-bootstrap"
import "./style.css";


export default class Winnings extends Component {

    render() {
        return (
            <div className="modal">
                <Modal
                    {...this.props}
                    size="xl"
                    variant="primary"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="enterTixNo" style={{ fontFamily: "Arial" }}>
                            <p style={{ fontFamily: "Quantico", color: "blue" }}><b>POWER<span style={{ color: "red" }}>BALLER</span></b></p>
                            <h6><em>Source: powerball.com</em></h6>

                        </Modal.Title>



                    </Modal.Header>
                    <Modal.Body> <div className="winningsMatrix container" style={{ minHeight: "600px", minWidth: "700px" }}>
                        <div className="row">
                            <div className="col-md-12">

                            </div>
                        </div>
                    </div>
                    </Modal.Body>

                </Modal>
            </div>


        )
    }
}


