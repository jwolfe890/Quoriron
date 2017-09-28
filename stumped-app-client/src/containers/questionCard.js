import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAnswers } from '../actions/answers'
import CreateAnswer from './createAnswer'
import Answers from '../containers/answers'

class questionCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    const { questionId } = this.props.match.params
    this.props.getAnswers(questionId)
  }

  render() {

    const { question } = this.props

    var renderAnswers = []

    if (question.answers) {
      var renderAnswers = question.answers.map(answer =>  
        <div>
          <p>{answer.id}</p>
        </div>
      );
    } 

    debugger
  
    return (
      <div>
        <h4>{question.title}</h4>
        <p>{question.details}</p>
        <p>{renderAnswers}</p>
      </div>
    );
  }
}

  const mapStateToProps = (state, ownProps) => {
    const question = state.questions.find(question => question.id == ownProps.match.params.questionId)

      if (question) {
        return { question }
      } else {
        return { question: {},
         }
          }
      }

export default connect(mapStateToProps, {getAnswers})(questionCard);
