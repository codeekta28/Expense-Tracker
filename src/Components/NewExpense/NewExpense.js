import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [toggleForm, setToggleForm] = useState(false);
  // function that recieves data from expense form
  function saveFormHandler(enteredFormData) {
    // console.log("enteredData",enteredFormData);
    props.onRecievingData({
      ...enteredFormData,
      date: new Date(enteredFormData.date),
    });
    setToggleForm((prevState) => {
      return !prevState;
    });
  }
  // function that handle togglForm State
  function handleShowForm() {
    setToggleForm((prevState) => {
      return !prevState;
    });
  }
  // function that handle togglForm State
  function cancelHander() {
    setToggleForm((prevState) => {
      return !prevState;
    });
  }
  const addExpenseBtn = <button onClick={handleShowForm}>Add Expense</button>;
  const finalStatement = toggleForm ? (
    <ExpenseForm onSavingForm={saveFormHandler} onCancel={cancelHander} />
  ) : (
    addExpenseBtn
  );
  return <div className="new-expense">{finalStatement}</div>;
}

export default NewExpense;
