import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';

import AskQuestion from './askquestion'
import QuestionCard from '../containers/questionCard';
import { getQuestions } from '../actions/questions';

class Questions extends Component {

  componentDidMount() {
    this.props.getQuestions()
  }

  render() {
    const { questions, match } = this.props;

    const renderQuestions = questions.map(question => 
      <div>
        <Link key={question.id} to={`/questions/${question.id}`}><h4>{question.title}</h4></Link>
      </div>
    );

    return (
      <div>
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