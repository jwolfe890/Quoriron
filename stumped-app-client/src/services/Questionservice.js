const API_URL = process.env.REACT_APP_API_URL;

const QuestionService = {
  fetchQuestions() {
    return fetch(`${API_URL}/questions`)
      .then(response => response.json())
  }
}

export default QuestionService;