import React, { Component } from 'react';

class questionCard extends Component {

  render() {

    const { question } = this.props

    return (
        <div>
            <p>{question.title}</p>
        </div>
    );
  }
}

export default questionCard;
