import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  // state for filter year
  const [selectedValue, setSelectedValue] = useState("2022");
  function handleSelectingValue(selectedValue) {
    // console.log("This is expense page", selectedValue);
    setSelectedValue(selectedValue);
  }
  // filtering data on th basis of year
  const filterExpenseList = props.expenseList.filter(
    (val) => val.date.getFullYear().toString() === selectedValue
  );
  // console.log("filterList", filterExpenseList);

  // conditional content
  // const finalStatement =
  //   filterExpenseList.length === 0 ? (
  //     <p style={{ color: "white" }}>No Expenses Found</p>
  //   ) : (
  //     expenseList
  //   );

  return (
    <Card className="expenses">
          
      <ExpenseFilter
        selected={selectedValue}
        onSelectingValue={handleSelectingValue}
      />
      {/* {finalStatement} */}
      <ExpenseChart expenses={filterExpenseList} />
      <ExpenseList filterData={filterExpenseList} />
    </Card>
  );
}

export default Expenses;
