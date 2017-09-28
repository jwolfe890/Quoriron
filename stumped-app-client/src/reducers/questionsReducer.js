export default (state = [], action) => {
  switch(action.type) {
    case 'GET_QUESTIONS_SUCCESS':
      return action.questions;

    case 'CREATE_QUESTION_SUCCESS':
      return state.concat(action.question);

    case 'GET_QUESTION_ANSWERS':

      debugger


    default:
      return state;
  }
}