import React, { useState } from 'react';
import './App.css';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import questions from './questions';
import Darkbutton from './components/Darkbutton';

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const optionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    };

    return (
        <div className="App">
            <Darkbutton />
            {showResult ? (
                <Result score={score} total={questions.length} restartQuiz={restartQuiz} />
            ) : (
                <QuestionBox 
                    question={questions[currentQuestion]} 
                    optionClick={optionClick} 
                />
            )}
        </div>
    );
}

export default App;
