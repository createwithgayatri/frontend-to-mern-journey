import { useState } from "react";
import Quiz from "./components/Quiz";
import CategorySelector from "./components/CategorySelector";

function App() {
  const [category, setCategory] = useState(null);

  return (
    <div>
      <h1>Quiz App</h1>
      {!category ? (
        <CategorySelector setCategory={setCategory} />
      ) : (
        <Quiz category={category} />
      )}
    </div>
  );
}

export default App;