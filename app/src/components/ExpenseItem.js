// A component in React is a function!!!
import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>January 12th 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$293.4</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
