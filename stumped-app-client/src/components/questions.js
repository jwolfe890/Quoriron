import React from 'react';

const Questions = ({ questions }) => {
  const renderQuestions = questions.map(question =>
    <span key={question.id}>{question.title}</span>
  )

  return (
    <div>
      {renderQuestions}
    </div>
  )
}

export default Questions