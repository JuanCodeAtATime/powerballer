import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap"
import Powerballinput from "../../pages/Members";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export default class ModalInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="xl"
                    variant="primary"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Enter Ticket #s
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


