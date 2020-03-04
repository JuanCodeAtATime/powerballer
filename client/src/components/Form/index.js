import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group" style={{ display: "inline" }}>
            <input className="form-control" {...props} style={{ width: "45px", height: "55px", marginRight: "4px", display: "inline-block", backgroundColor: "whitesmoke", borderRadius: "5px" }} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
        </button>
    );
}
