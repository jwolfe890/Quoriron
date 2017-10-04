import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { changeAnswer } from '../actions/answers'
import AnswerCard from '../components/Answercard'


class Answer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        ...this.props.answer
      }
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.answer.count !== nextState.count 
  }

  upVote = () => {
    const { questionId, changeAnswer } = this.props
    this.setState({
      count: this.state.count + 1
    }, () => {
      changeAnswer(questionId, this.state)
    });
  }

  downVote = event => {
    const { questionId, changeAnswer } = this.props
    this.setState({
      count: this.state.count - 1
    }, () => {
      changeAnswer(questionId, this.state)
    });
  }

  render() {
    return (
        <div className="mybox">
          <AnswerCard rating={this.state.count} upvoter={this.upVote} downvoter={this.downVote} content={this.props.answer.content} />
        </div>
    );
  }
}

export default connect(null, { changeAnswer })(Answer);

