export default (state = {
  title: '',
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.questionFormData

    case 'RESET_QUESTION_FORM':
      return state;

      default:
        return state;
  }
}