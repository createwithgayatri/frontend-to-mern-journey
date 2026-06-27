import { useState } from "react";

export default function Form({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    addTransaction({
      id: Date.now(),
      text,
      amount: +amount
    });

    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount (+income, -expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}