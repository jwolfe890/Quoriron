import React, { Component } from 'react';
import CreateAnswer from './createAnswer'
import { connect } from 'react-redux';

class questionCard extends Component {

  render() {
    
    const { question } = this.props
    return (
        <div>
          <p>{question.title}</p>
          <CreateAnswer questionId={question.id} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(questionCard);
