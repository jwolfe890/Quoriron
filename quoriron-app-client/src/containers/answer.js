import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { changeAnswer } from '../actions/answers';
import AnswerCard from '../components/answercard'


class Answer extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.answer.count !== this.props.answer.count 
  }

  upVote = () => {
    const { questionId, changeAnswer, answer } = this.props
    const updatedAnswer = Object.assign( {}, answer, { count: answer.count + 1 })
    changeAnswer(questionId, updatedAnswer) 
  }

  downVote = event => {
    const { questionId, changeAnswer, answer } = this.props
    const updatedAnswer = Object.assign( {}, answer, { count: answer.count - 1 })
    changeAnswer(questionId, updatedAnswer) 
  }

  render() {
    return (
        <div className="mybox">
          <AnswerCard rating={this.props.answer.count} upvoter={this.upVote} downvoter={this.downVote} content={this.props.answer.content} />
        </div>
    );
  }
}

export default connect(null, { changeAnswer })(Answer);

