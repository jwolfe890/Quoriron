import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAnswer from './createAnswer'
import {Redirect} from 'react-router-dom';

import { deleteQuestion } from '../actions/questions'

class questionCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete = () => {
    const { questionId } = this.props.match.params
    const { history } = this.props
    deleteQuestion(questionId, history);
  }

  render() {
    const { questions, match } = this.props
    const { questionId } = match.params
    const question = questions.find(question => question.id == questionId)

    return (
        <div>
        { question ?
          <div>
            <h4>{question.title}</h4>
            <p>{question.details}</p>
            <button onClick={this.handleDelete}>Delete</button>
            <CreateAnswer questionId={match.params.questionId} />
          </div>
        : "Loading" 
        }
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    questions: state.questions
  })
}

export default connect(mapStateToProps, { deleteQuestion })(questionCard);
