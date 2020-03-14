import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
    return (
        <div className="list-overflow-container" style={{ backgroundColor: "#eee", borderTop: "solid red 25px", marginTop: "15px" }}>
            <label htmlFor="pastTicketNo" style={{ marginLeft: "10px", color: "black", fontSize: "25px", textAlign: "center", fontFamily: "Quantico" }}><b>View or Delete Tickets</b></label>
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}

export function ListItemFirstchild({ children }) {
    return <li className="list-overflow-container li:first-child">{children}</li>;
}

