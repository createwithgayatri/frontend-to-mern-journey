export default function Result({ score, total }) {
  return (
    <div>
      <h2>Quiz Finished 🎉</h2>
      <h3>Your Score: {score} / {total}</h3>
    </div>
  );
}