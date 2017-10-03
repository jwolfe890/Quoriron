import answersReducer from './answersReducer';

export default (state = [], action) => {

  debugger

  switch(action.type) {
    
    case 'GET_QUESTIONS_SUCCESS':
      return action.questions;

    case 'CREATE_QUESTION_SUCCESS':
      return state.concat(action.question);

    case 'DELETE_QUESTION_SUCCESS': { 

      debugger

      const index = state.findIndex(question => question.id == action.questionId);
            
      const removedQuestionObject = [
            ...state.slice(0, index),
            ...state.slice(index + 1)
            ];

      return removedQuestionObject

      debugger

    }

    case 'CREATE_ANSWER_SUCCESS':
    case 'GET_ANSWERS_SUCCESS':
    case 'UPDATE_ANSWER_SUCCESS':

      const index = state.findIndex(question => question.id == action.questionId);
      const question = state[index];

      const updatedQuestion = Object.assign({}, question, {
        answers: answersReducer(question.answers, action) });

      const updatedQuestions = [...state.slice(0, index),
                    updatedQuestion,
                   ...state.slice(index + 1)
                  ]

      return updatedQuestions

    default:
      return state;
 
  }
}