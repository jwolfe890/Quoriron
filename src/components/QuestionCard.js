import React, { Component } from 'react';

class QuestionCard extends Component {

  render() {
    return (
        <div>
          <h4>{this.props.question.title}</h4>
          <p>{this.props.question.details}</p>
        </div>
    );
  }
}

export default QuestionCard;
