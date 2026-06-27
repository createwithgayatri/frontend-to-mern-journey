export default function QuestionCard({ question, options, handleAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((opt, index) => (
        <button key={index} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}