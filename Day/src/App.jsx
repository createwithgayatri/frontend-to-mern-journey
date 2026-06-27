import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";

function App() {
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>
      <Summary transactions={transactions} />
      <Form addTransaction={addTransaction} />
      <List transactions={transactions} />
    </div>
  );
}

export default App;