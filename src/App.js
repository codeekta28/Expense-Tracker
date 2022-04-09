import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

function App(props) {
  const [formData, setFormData] = useState(props.expenses);
  function dataRecieveHandler(formData) {
    // console.log("form in app",formData);
    setFormData((prevState) => {
      return [formData,...prevState];
    });
  }
  // console.log("form data",formData);
  return (
    <div className="App">
      <NewExpense onRecievingData={dataRecieveHandler} />
      <Expenses expenseList={formData} />
    </div>
  );
}

App.defaultProps = {
  expenses: [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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
  ],
};

export default App;
