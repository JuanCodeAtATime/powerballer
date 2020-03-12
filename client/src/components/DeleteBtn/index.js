import React from "react";
import "./style.css";
import ReactTooltip from 'react-tooltip'


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
    return (
        <span className="delete-btn" {...props} role="button" tabIndex="0">
            <button type="button" data-tip="Delete Ticket#" data-text-color="red"
                style={{ color: "white", backgroundColor: "red", borderRadius: "5px" }}>X</button>
            <ReactTooltip />
        </span>
    );
}

export default DeleteBtn;
