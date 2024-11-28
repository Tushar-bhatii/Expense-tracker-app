import React, {useState} from 'react';

import NewExpense from './Components/NewExpense/NewExpense';

import Expenses from './Components/Expenses/Expenses';





let DUMMY_EXPENSE = [
   
];



const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (expense) => {
        const updateExpense = [expense, ...expenses];
        setExpenses(updateExpense);

    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses}/>
        </div>
    )

}
export default App;


