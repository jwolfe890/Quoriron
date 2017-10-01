import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    }

  }

  render() {

    debugger

    return (
        <div>
          Answer Card: <p>{this.props.answer}</p>
        </div>
    );
  }
}


export default AnswerCard;

