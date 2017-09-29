import React, { Component } from 'react';

class AnswerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    }

  }

  render() {
    return (
        <div>
          Answer Card: <p>{this.props.answer}</p>
        </div>
    );
  }
}

export default AnswerCard;
