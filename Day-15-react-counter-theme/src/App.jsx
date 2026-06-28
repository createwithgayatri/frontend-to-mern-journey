import { useState } from "react";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>React Counter + Theme Toggle</h1>

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;