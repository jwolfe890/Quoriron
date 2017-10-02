class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.where(question_id: params[:question_id])
    render json: @answers
  end

  def create
    @question = Question.find_by(id: params[:question_id])
    @answer = @question.answers.create(answer_params)
    render json: @answer  
  end

  def update
    @answer = Answer.find_by(id: params[:id])
    @answer.update(answer_params)
    render json: @answer
  end 

  private
    def answer_params
      params.require(:answer).permit(:content, :count)
    end 

end 


