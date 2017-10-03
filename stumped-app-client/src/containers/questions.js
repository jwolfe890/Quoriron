import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Questions extends Component {


    componentWillReceiveProps(nextProps, nextState) {
      debugger
    }

    // shouldComponentUpdate() {
    //   debugger
    //   this.props.getQuestions()
    // }

  render() {
    const { questions } = this.props;
    const renderQuestions = questions.map(question => 
        <Link key={question.id} to={`/questions/${question.id}`}><h4>{question.title}</h4></Link>
    );
    
    debugger

    return (
        <div>
          {renderQuestions}
        </div>
    );  
  }  
}

const mapStateToProps = (state) => {
  return ({
    questions: state.questions
  })
}

export default connect(mapStateToProps)(Questions);