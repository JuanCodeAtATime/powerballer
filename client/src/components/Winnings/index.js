import React, { Component } from "react";
import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom";
import LastDrawDate from "../LastDrawDate";
import "./style.css";


export default class Winnings extends Component {

    render() {
        return (
            <div className="modal video">
                <Modal
                    {...this.props}
                    size="md"
                    variant="primary"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="enterTixNo" style={{ fontFamily: "Arial" }}>
                            <p style={{ fontFamily: "Quantico", color: "blue" }}><b>POWER<span style={{ color: "red" }}>BALLER</span></b></p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Link className="video">
                            <iframe
                                className="iframe"
                                title="Latest Powerball Draw"
                                src="https://www.youtube.com/embed?max-results=1&showinfo=0&rel=0&listType=user_uploads&list=PowerbaLL39"
                                allowFullScreen
                            >
                            </iframe>
                        </Link>
                        <h5 style={{ fontFamily: "Quantico", color: "blue" }}>DRAWING DATE: </h5> <LastDrawDate></LastDrawDate>

                    </Modal.Body>

                </Modal>
            </div>


        )
    }
}


