import React, { Component } from 'react';

const QuestionCard = ({ question }) => {

    return (
        <div>
          <h4>{question.title}</h4>
          <p>{question.details}</p>
        </div>
    );
}

export default QuestionCard;
