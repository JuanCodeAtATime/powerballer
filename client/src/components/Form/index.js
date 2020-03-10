import React from "react";
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group center" style={{ display: "inline", width: "100%" }}>
            <input type="number" className="form-control" {...props}
                style={{
                    borderTop: "solid red 10px",
                    borderBottom: "solid red 10px",
                    color: "red",
                    textAlign: "center",
                    width: "97px",
                    height: "100px",
                    marginRight: "2px",
                    marginTop: "15px",
                    backgroundColor: "whitesmoke",
                    borderRadius: "5px",
                    fontSize: "65px"
                }} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} className="saveNo" style={{
            color: "white",
            textAlign: "center",
            width: "20px",
            height: "20px",
            marginLeft: "8px",
            display: "inline",
            backgroundColor: "black",
            borderRadius: "5px",
            fontSize: "15px"
        }}
        >
            {props.children}
        </button>
    );
}
