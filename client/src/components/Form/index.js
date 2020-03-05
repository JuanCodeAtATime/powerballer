import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group center" style={{ display: "inline", width: "100%" }}>

            <input type="number" className="form-control" {...props}
                style={{
                    float: "left",
                    width: "97px",
                    height: "100px",
                    marginRight: "2px",
                    display: "inline-block",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                    fontSize: "70px"
                }} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "left", marginBottom: 10, width: "98%" }} className="btn btn-success">
            {props.children}
        </button>
    );
}
