export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_QUESTION_SUCCESS':
      return action.question;
    default:
      return state;
  }
}