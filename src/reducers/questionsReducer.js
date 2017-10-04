import answersReducer from './answersReducer';

export default (state = [], action) => {
  switch(action.type) {
    case 'GET_QUESTIONS_SUCCESS':
      return action.questions;
    case 'CREATE_QUESTION_SUCCESS':
      return state.concat(action.question);
    case 'DELETE_QUESTION_SUCCESS': { 
      const index = state.findIndex(question => question.id == action.questionId);
      const removedQuestionObject = [
            ...state.slice(0, index),
            ...state.slice(index + 1)
            ];
      return removedQuestionObject
      } 
    default:
      return state;
  }
}