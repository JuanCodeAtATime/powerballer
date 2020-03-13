import React from "react";
import { Button } from "react-bootstrap"
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group center" style={{ display: "inline" }}>
            <input type="number" maxLength="1" className="form-control noscroll" {...props}
                style={{
                    cursor: "pointer",
                    borderTop: "solid red 8px",
                    borderBottom: "solid red 8px",
                    borderLeft: "solid grey 2.5px",
                    borderRight: "solid grey 2.5px",
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
        <Button {...props} className="saveNo" style={{
            color: "white",
            textAlign: "center",
            display: "inline-block",
            width: "25%",
            height: "35px",
            marginLeft: "8px",
            backgroundColor: "green",
            borderRadius: "5px",
            fontSize: "15px",
            float: "right",
            marginTop: "20px"
        }}
        >
            {props.children}
        </Button>
    );
}
