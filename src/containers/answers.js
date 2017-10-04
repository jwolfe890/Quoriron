import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnswers } from '../actions/answers'
import Answer from './answer'

import { getQuestions } from '../actions/questions'

class Answers extends Component {
  render() {
    const { question } = this.props
      if (question) {
          var sortedAnswers = question.answers.sort(function(a,b) 
            {return (a.count < b.count) ? 1 : ((b.count > a.count) ? -1 : 0);} 
          ).map(answer =>  
            <Answer key={answer.id} answer={answer} questionId={question.id} />
        )
      };
  return (
        <div> 
          {sortedAnswers}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return ({
    question: state.question
  })
}

export default connect(mapStateToProps, { getAnswers, getQuestions })(Answers);
