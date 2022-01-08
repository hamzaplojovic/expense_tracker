// A component in React is a function!!!
import "./ExpenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
    const [name, setName] = useState(props.name);
    const clickHandler = () => {
        setName("Updated");
    };

    return (
        <div className="expense-item">
            <div id="date">{props.date}</div>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">{"$" + props.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;
