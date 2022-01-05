import ExpenseItem from "./components/ExpenseItem";

function App() {
    return (
        <div>
            <ExpenseItem
                name="Car Insurance"
                price="293.4"
                date="12th January 2022"
            />
            <ExpenseItem
                name="Internet Costs"
                price="15"
                date="31th November 2022"
            />
        </div>
    );
}

export default App;
