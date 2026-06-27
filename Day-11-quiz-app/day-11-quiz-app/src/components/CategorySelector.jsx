export default function CategorySelector({ setCategory }) {
  return (
    <div>
      <h2>Select Category</h2>
      <button onClick={() => setCategory("javascript")}>JavaScript</button>
      <button onClick={() => setCategory("react")}>React</button>
    </div>
  );
}