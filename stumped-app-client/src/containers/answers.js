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

    const { answers } = this.props

    const renderAnswers = answers.map(answer => 
        <AnswerCard key={answer.id} answer={answer.content} />
    );

    console.log({answers})

    return (
        <div>
          {renderAnswers}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    answers: state.answers
  })
}

export default connect(mapStateToProps, { getAnswers })(Answers);
