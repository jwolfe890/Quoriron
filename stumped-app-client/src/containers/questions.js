import React, { Component } from 'react';
import { connect } from 'react-redux';

import AskQuestion from './askquestion'
import QuestionCard from '../containers/questionCard';
import { getQuestions } from '../actions/questions';

class Questions extends Component {

  componentDidMount() {
    this.props.getQuestions()
  }

  render() {
    const { questions } = this.props;
    const renderQuestions = questions.map(question =>
        <div>
          <QuestionCard question={question} /> 
        </div>
      )

    return (
      <div>
        <div>
          <AskQuestion />
        </div>
        {renderQuestions}
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return ({
    questions: state.questions
  })
}

export default connect(mapStateToProps, { getQuestions })(Questions);