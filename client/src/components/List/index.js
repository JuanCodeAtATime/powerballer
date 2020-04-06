import React from "react";
import "./style.css";

// This file exports both the List and ListItem components


export function ListItem({ children }) {
    return <li className="list-group-item" >{children}</li>;
}

export function ListItemFirstchild({ children }) {
    return <li className="list-overflow-container li:first-child">{children}</li>;
}

