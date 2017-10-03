import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnswers } from '../actions/answers'
import AnswerCard from '../components/answercard'

import { getQuestions } from '../actions/questions'

class Answers extends Component {

      componentDidMount() {
        const { questions, questionId } = this.props;
        const question = questions.find(question => question.id == questionId)
        if (!question.answers) {
          this.props.getAnswers(questionId)
        }
      }

  render() {
      const { questions, questionId } = this.props;
      const question = questions.find(question => question.id == questionId);

      if (question && question.answers) {
          var sortedAnswers = question.answers.sort(function(a,b) {return (a.count < b.count) ? 1 : ((b.count > a.count) ? -1 : 0);} 
          ).map(answer =>  
            <AnswerCard key={answer.id} answer={answer} questionId={questionId} />
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
    questions: state.questions
  })
}

export default connect(mapStateToProps, { getAnswers, getQuestions })(Answers);
