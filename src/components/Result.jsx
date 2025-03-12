import React from 'react';
import './Result.css';

const Result = ({ score, total, restartQuiz }) => {
  const percentage = (score / total) * 100;
  const message = percentage > 50 ? "Great job!" : "Better luck next time!";

  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
      <p>{message}</p>
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
