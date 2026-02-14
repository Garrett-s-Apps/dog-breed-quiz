import { useState } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Result from './Result';
import { questions, calculateResult } from '../data/quizData';

export default function Quiz({ onRestart }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion + 1 >= questions.length) {
      const quizResult = calculateResult(newAnswers);
      setTimeout(() => setResult(quizResult), 200);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    onRestart();
  };

  if (result) {
    return <Result result={result} onRetake={handleRetake} />;
  }

  return (
    <div className="quiz-container">
      <ProgressBar current={currentQuestion} total={questions.length} />
      <Question
        key={currentQuestion}
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
