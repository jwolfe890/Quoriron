import React, { Component } from 'react';
import CreateAnswer from './createAnswer'
import { connect } from 'react-redux';

class questionCard extends Component {

  render() {

    const { question } = this.props

    return (
      <div>
        <h4>{question.title}</h4>
        <p>{question.details}</p>
        <CreateAnswer questionId={question.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions.find(question => question.id == ownProps.match.params.questionId)

      if (question) {
        return { question }
      } else {
        return { question: {} }
      }
        }

export default connect(mapStateToProps)(questionCard);
