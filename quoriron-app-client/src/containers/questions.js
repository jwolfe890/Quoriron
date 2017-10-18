import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getQuestions } from '../actions/questions'

class Questions extends Component {

    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.questions.length != this.props.questions.length) {
        return true
      } else {
        return false
      }
    }

  render() {
    const renderQuestions = this.props.questions.map(question => 
      <Link key={question.id} to={`/questions/${question.id}`}><h4>{question.title}</h4></Link>
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
