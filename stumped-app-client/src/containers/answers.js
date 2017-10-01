import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAnswers } from '../actions/answers'

import AnswerCard from '../components/answercard'

class Answers extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {

    return (
        <div>
          <p>{this.props.answer}</p>
        </div>
    );
  }
}


export default Answers;
