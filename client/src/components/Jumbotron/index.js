import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ height: "auto", clear: "both", paddingTop: 10, textAlign: "center", borderTop: "solid blue 25px", opacity: ".65" }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;
