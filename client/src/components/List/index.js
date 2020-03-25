import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
    return (
        <div className="list-overflow-container" style={{ backgroundColor: "whitesmoke" }}>
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li className="list-group-item" style={{ backgroundColor: "#facdd4" }}>{children}</li>;
}

export function ListItemFirstchild({ children }) {
    return <li className="list-overflow-container li:first-child">{children}</li>;
}

