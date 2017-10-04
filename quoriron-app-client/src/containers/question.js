import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAnswer from './createAnswer'
import {Redirect} from 'react-router-dom';
import QuestionCard from '../components/QuestionCard'

import { getQuestion } from '../actions/questions'
import { deleteQuestion } from '../actions/questions'

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.getQuestion(this.props.match.params.questionId)
  }

  shouldComponentUpdate() {
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
        { question.title ?
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

const mapStateToProps = (state) => {
  return ({
    question: state.question
  })
}

export default connect(mapStateToProps, { deleteQuestion, getQuestion })(Question);
