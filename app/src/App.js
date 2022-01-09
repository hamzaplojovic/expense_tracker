import React from "react";

import NewExpense from "./components/New Expense/NewExpense";
import Expenses from "./components/Expenses/ExpenseItem";

const App = () => {
    return (
        <div>
            <NewExpense />
            <Expenses price="90" />
        </div>
    );
};

export default App;
