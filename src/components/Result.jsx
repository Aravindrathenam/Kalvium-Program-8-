import React from 'react';

const Result = ({ score, len, restartQuiz }) => {
  const percentage = (score / len) * 100;
  const message = percentage >50 ? "Great job" : "Better luck next time";


  return (
    <div className="result-box">
      <h2>Quiz Completed!</h2>
      <p>Your Score:</p>
      <p>{message}</p>
      <button className="restart-btn" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
