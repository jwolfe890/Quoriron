import React, { Component } from 'react';

class AnswerCard extends Component {

  render() {
    return (
        <div>
          <p>{this.props.content}</p>
          RATING: <p>{this.props.rating}</p>
          <button onClick={this.props.upvoter}>Upvote</button>
          <button onClick={this.props.downvoter}>Downvote</button>
        </div>
    );
  }
}

export default AnswerCard;


