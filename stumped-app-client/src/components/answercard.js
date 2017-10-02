import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { changeAnswer } from '../actions/answers'

class AnswerCard extends Component {

    constructor(props) {
      super(props);
      this.state = {
        ...this.props.answer
      }
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.answer.count != nextState.count 
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
    console.log(this.state.count)
    debugger
    return (
        <div className="mybox">
          <p>{this.props.answer.content}</p>
          <p>{this.state.count}</p>
          <button onClick={this.upVote}>Upvote</button>
          <button onClick={this.downVote}>Downvote</button>
        </div>
    );
  }
}

export default connect(null, { changeAnswer })(AnswerCard);

