import { useState } from 'react';

export default function Question({ question, questionNumber, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [entering, setEntering] = useState(true);

  useState(() => {
    setEntering(true);
    const timer = setTimeout(() => setEntering(false), 50);
    return () => clearTimeout(timer);
  });

  const handleSelect = (option, index) => {
    if (animating) return;
    setSelected(index);
    setAnimating(true);

    setTimeout(() => {
      onAnswer(option);
      setSelected(null);
      setAnimating(false);
      setEntering(true);
      setTimeout(() => setEntering(false), 50);
    }, 500);
  };

  return (
    <div className={`question-card ${entering ? 'entering' : ''} ${animating ? 'exiting' : ''}`}>
      <div className="question-number">Q{questionNumber}</div>
      <h2 className="question-text">{question.question}</h2>
      <div className="options-grid">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selected === index ? 'selected' : ''}`}
            onClick={() => handleSelect(option, index)}
            disabled={animating}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="option-text">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
