import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
 const [title, setTitle] = useState(props.title);

  const ClickHandler = () => {
   setTitle('Updated');
    console.log(title);
  };

  //Card is a custom component
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={ClickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
