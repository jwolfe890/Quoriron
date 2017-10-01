import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAnswers } from '../actions/answers'
import CreateAnswer from './createAnswer'
import Answers from '../containers/answers'
import AnswerCard from '../components/answercard'

class questionCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }

  // question delete/and maybe patch function here

  componentDidMount() {
    const { questionId } = this.props.match.params
    this.props.getAnswers(questionId)
  }

    shouldComponentUpdate() {
      debugger
      return true
    }

  render() {

    const { questionId } = this.props.match.params


    const { questions } = this.props
    const question = questions.find(question => question.id == questionId)
    var renderAnswers = []

    debugger

    // if (question) {
    //   var renderAnswers = question.answers.map(answer =>  
    //     <div>
    //       <AnswerCard key={answer.id} question={question} answer={answer.content} />
    //     </div>
    //   );
    // }

    return (
        <div>
        { question ?
        <div> 
            <h4>{question.title}</h4>
            <p>{question.details}</p>
          <div>
            <p>{renderAnswers}</p>
          </div>
          <div>
            <CreateAnswer questionId={this.props.match.params.questionId} />
          </div>
        </div> 
        : "Loading" 
        }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    questions: state.questions
  })
}

export default connect(mapStateToProps, {getAnswers})(questionCard);
