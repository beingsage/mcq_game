import React from 'react';

const ScoreScreen = ({ score, total }) => (
  <div className="score-screen">
    <h1>Quiz Complete!</h1>
    <p>Your Score: {score} / {total}</p>
    <button onClick={() => window.location.reload()}>Restart</button>
  </div>
);

export default ScoreScreen;
