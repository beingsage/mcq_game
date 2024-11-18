import React from 'react';

const StartScreen = ({ startQuiz }) => (
  <div className="start-screen">
    <h1>Welcome to the MCQ Quiz!</h1>
    <button onClick={startQuiz}>Start Quiz</button>
  </div>
);

export default StartScreen;
