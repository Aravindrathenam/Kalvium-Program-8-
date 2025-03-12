import React, { useState } from 'react';
import './App.css';
import questions from './questions';
import Result from './components/Result';
import QuestionBox from './components/QuestionBox';
import Darkbutton from './components/Darkbutton';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const[showResult,setShowResult] = useState(false);

  const optionClick = (isCorrect) => {
    console.log('Option clicked:', isCorrect);

    if(isCorrect){
      setScore(score +1);
    }
    const nextQuestion = currentQuestion +1;
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };
  

  return (
    <div>
      <h3>Score: {score}</h3>
      {currentQuestion < questions.length ? (
        <>
          <Darkbutton />
          <QuestionBox
            questions={questions}
            query={currentQuestion}
            selectchoice={optionClick}
          />
        </>
      ) : (
        <Result
          score={score}
          len={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
