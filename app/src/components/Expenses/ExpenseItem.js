// A component in React is a function!!!
import "./ExpenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div id="date">{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">{"$" + props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
