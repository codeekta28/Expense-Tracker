import React from "react";
import "./ExpenseDate.css";

function ExpenseData(props) {
  const { date } = props;
  const currentDate=new Date(date)
  const month = currentDate.toLocaleDateString("en-us", { month: "long" });
  const day=currentDate.toLocaleDateString("en-us",{day:"numeric"})
  const year=currentDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseData;
