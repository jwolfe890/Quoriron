import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAnswer from './createAnswer'
import {Redirect} from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import Counter from '../components/counter'

import { getQuestion } from '../actions/questions'
import { deleteQuestion } from '../actions/questions'

import { increment } from '../actions/counter'
import { decrement } from '../actions/counter'

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleDelete = this.handleDelete.bind(this)

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger
    return true
  }

  componentDidMount() {
      this.props.getQuestion(this.props.match.params.questionId)
  }

  handleDelete = () => {
    const { question } = this.props
    const { history } = this.props
    this.props.deleteQuestion(question.id, history);
  }

  handleIncrement = () => { 
    this.props.increment()
  }

  handleDecrement = () => {
    this.props.decrement()
  }

  render() {
    const { question, value } = this.props
    return (
        <div>
        { question.title ?
        <div>
          <Counter increment={this.handleIncrement} decrement={this.handleDecrement} value={value} /> 
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

  debugger

   if (state.question && state.question.id == ownProps.match.params.questionId) {
      return { question: state.question, value: state.counter }
    } else {
      return { question: {}, value: state.counter }
    }
  }

export default connect(mapStateToProps, { deleteQuestion, getQuestion, increment, decrement })(Question);
