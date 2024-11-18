import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ScoreScreen from './components/ScoreScreen';
import ProgressBar from './components/ProgressBar';
import questions from './Data/Question';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'quiz', 'score'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => setCurrentScreen('quiz');

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentScreen('score');
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="app">
      {currentScreen === 'start' && <StartScreen startQuiz={startQuiz} />}
      {currentScreen === 'quiz' && (
        <>
          <ProgressBar progress={progress} />
          <QuestionCard
            questionData={questions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            handleAnswer={handleAnswer}
          />
        </>
      )}
      {currentScreen === 'score' && <ScoreScreen score={score} total={questions.length} />}
    </div>
  );
};

export default App;
