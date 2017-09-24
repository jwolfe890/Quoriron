// Action Creators

export const updateQuestionFormData = questionFormData => {
  return {
    type: 'UPDATED_DATA',
    questionFormData
  }
}

export const resetQuestionForm = () => {  
  return {
    type: 'RESET_QUESTION_FORM'
  }
}