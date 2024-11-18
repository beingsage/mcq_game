import React from 'react';

const QuestionCard = ({ questionData, currentIndex, totalQuestions, handleAnswer }) => (
  <div className="question-card">
    <h2>Question {currentIndex + 1} of {totalQuestions}</h2>
    <p>{questionData.question}</p>
    <div className="options">
      {questionData.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
