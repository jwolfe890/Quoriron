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
    debugger
    return true
  }

  componentDidMount() {
    debugger
    this.props.getAnswers(this.props.match.params.questionId)
  }

  handleDelete = () => {
    const { question } = this.props
    const { history } = this.props
    this.props.deleteQuestion(question.id, history);
  }

  render() {

    debugger

    const { question } = this.props
    return (
        <div>
        { question ?
        <div>
          <QuestionCard question={question} />
          <button onClick={this.handleDelete}>Delete</button>
          <CreateAnswer questionId={question.id} />
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
