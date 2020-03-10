import React from "react";
import Powerballinput from "../../pages/Members";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Modal(props) {

    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <span className="close">&times;</span>
                <Powerballinput />
            </div>
        </div>
    );
}

export default Modal;
