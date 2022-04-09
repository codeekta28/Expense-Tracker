import React, { useState } from "react";
import "./ExpenseForm.css";
import { v4 as uuidv4 } from 'uuid';

function ExpenseForm(props) {
  // various ways to declare multiple state
  // 1 way
  // const[enterTitle,setEnteredTitle]=useState("");
  // const[enterAmount,setEnteredAmount]=useState("");
  // const[enterDate,setEnteredDate]=useState("");
  //  function titleChangeHandler(e){
  //      setEnteredTitle(e.target.value)
  //  }
  //  function amountChangeHandler(e){
  //     setEnteredAmount(e.target.value)
  //  }
  //  function dateChangeHandler(e){
  //     setEnteredDate(e.target.value)
  //  }
  // ********************************************************************************
  // 2nd way

  // const[userInput,setUserInput]=useState({
  //     enteredTitle:"",
  //     enterdAmount:"",
  //     enteredDate:"",
  // })
  //  function titleChangeHandler(e){
  //      setUserInput(prevState=>{
  //          return{
  //              ...prevState,enteredTitle:e.target.value
  //          }
  //      })
  //  }
  //  function amountChangeHandler(e){
  //     setUserInput(prevState=>{
  //         return{
  //             ...prevState,enterdAmount:e.target.value
  //         }
  //     })
  //  }
  //  function dateChangeHandler(e){
  //     setUserInput(prevState=>{
  //         return{
  //             ...prevState,enteredDate:e.target.value
  //         }
  //     })
  //  }
  // *******************************************************************
  // 3rd way and my fav way
  const [input, setInput] = useState({});
  function handleChange(e) {
    setInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("title,amount,date",input.title,input.amount,input.date);
    // setting state to change input to empty string
    setInput(prevState=>{
      return {
      [e.target.name]:""
      }
    })
    // saving all state values in one object so that it can be easy to transfer 
    const stateData={
      title:input.title,
      amount:input.amount,
      date:input.date,
      id:uuidv4(),
    }
    // calling the function to transfer the value
    props.onSavingForm(stateData)
  }
  // cancel button action
  function handleCancel(){
    this.props.onCancel();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={input.title || ""}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={input.amount || ""}
            min={10}
            max={2000}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Title</label>
          <input
            type="date"
            name="date"
            value={input.date || ""}
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense!</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
