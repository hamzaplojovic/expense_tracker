// A component in React is a function!!!
import "./ExpenseItem.css";
import swal from "sweetalert";

function ExpenseItem(props) {
    const clickHandler = () => {
        swal("Hello world!");
    };
    return (
        <div className="expense-item">
            <div id="date">{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">{"$" + props.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;
