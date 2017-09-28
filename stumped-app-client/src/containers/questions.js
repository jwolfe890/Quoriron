import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import AskQuestion from './askquestion';
import questionCard from './questionCard';
import { getQuestions } from '../actions/questions';

class Questions extends Component {

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

  debugger

  return ({
    questions: state.questions
  })
}

export default connect(mapStateToProps)(Questions);