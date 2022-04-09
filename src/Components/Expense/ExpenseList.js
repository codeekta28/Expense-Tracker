import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
// conditional statement with return

function ExpenseList(props) {

  // mapping list
  const expenseListData = props.filterData.map((val) => (
    <ExpenseItem
      key={val.id}
      date={val.date}
      title={val.title}
      amount={val.amount}
    />
  ));

  if(props.filterData.length==0){
      return(<h2 className="expenses-list__fallback">No Expense Found</h2>)
  }
  return <ul className="expenses-list">
      {expenseListData}
  </ul>
}

export default ExpenseList;
