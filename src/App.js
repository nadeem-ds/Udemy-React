import React ,{useState} from "react";
import NewComponentExpenses from "./component//Expenses/NewComponentExpenses";
import NewExpense from "./component/NewExpense/NewExpense";
import "./App.css";

const DummyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const  App = () => {
  const [expenses, setExpenses] = useState(DummyExpense);

  

  const addExpenseHandler =(expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <h1>Let's get started</h1>
        Assignment work on New Exp
      <NewExpense onAddExpense={addExpenseHandler}/> 
      <NewComponentExpenses items={expenses}/>
    </div>
  );
}

export default App;
