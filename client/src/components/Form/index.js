import React from "react";
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group center" style={{ display: "inline" }}>
            <input type="number" className="form-control" {...props}
                style={{
                    borderTop: "solid red 8px",
                    borderBottom: "solid red 8px",
                    color: "red",
                    textAlign: "center",
                    width: "70px",
                    height: "80px",
                    marginRight: "6px",
                    marginTop: "15px",
                    borderRadius: "5px",
                    fontSize: "40px"
                }} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} className="saveNo" style={{
            color: "white",
            textAlign: "center",
            width: "68.5%",
            height: "25px",
            marginLeft: "8px",
            display: "inline",
            backgroundColor: "green",
            borderRadius: "5px",
            fontSize: "15px"
        }}
        >
            {props.children}
        </button>
    );
}
