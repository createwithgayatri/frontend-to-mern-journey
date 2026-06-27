import { useState } from "react";
import { quizData } from "../data/questions";
import QuestionCard from "./QuestionsCard";
import Timer from "./Timer";
import Result from "./Result";

export default function Quiz({ category }) {
  const questions = quizData[category];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[index].answer) {
      setScore(score + 1);
    }

    nextQuestion();
  };

  const nextQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setTime(15);
    } else {
      setFinished(true);
    }
  };

  if (finished) return <Result score={score} total={questions.length} />;

  return (
    <div>
      <Timer time={time} setTime={setTime} onTimeUp={nextQuestion} />
      <QuestionCard
        question={questions[index].question}
        options={questions[index].options}
        handleAnswer={handleAnswer}
      />
      <h3>Score: {score}</h3>
    </div>
  );
}