import React from "react";
import "./style.css";
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
    return (
        <span className="delete-btn" {...props} role="button" tabIndex="0">
            <FontAwesomeIcon icon={faTrash}
                id="trashIcon"
                style={{ fontSize: "20px", cursor: "pointer" }}
                data-tip="Delete"
                data-text-color="white" />
            <ReactTooltip />
        </span>
    );
}

export default DeleteBtn;
