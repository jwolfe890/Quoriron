export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ANSWERS_SUCCESS':
      return action.answers;
    case 'CREATE_ANSWER_SUCCESS':
      return state.concat(action.answer);
    case 'UPDATE_ANSWER_SUCCESS':
      const index = state.findIndex(answer => answer.id === action.answer.id);
      const updatedAnswer = [
        ...state.slice(0, index),
        action.answer,
        ...state.slice(index + 1)
      ];
    return updatedAnswer
    default:
      return state;
  }
}
