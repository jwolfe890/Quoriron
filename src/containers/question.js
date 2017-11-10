import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAnswer from './createAnswer'
import {Redirect} from 'react-router-dom';
import QuestionCard from '../components/QuestionCard'

import { getQuestion } from '../actions/questions'
import { deleteQuestion } from '../actions/questions'
import { getAnswers } from '../actions/answers'


class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  handleDelete = () => {
    const { question } = this.props
    const { history } = this.props
    this.props.deleteQuestion(question.id, history);
  }

  render() {
    const { question } = this.props
    return (
        <div>
        { question ?
        <div>
          <QuestionCard question={question} />
          <button onClick={this.handleDelete}>Delete</button>
          <CreateAnswer question={question} />
        </div>
        : "Loading" 
        }
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.questions.find(question => question.id === +ownProps.match.params.questionId)
  }
} 


export default connect(mapStateToProps, { deleteQuestion, getAnswers })(Question);
