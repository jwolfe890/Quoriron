class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all 
    render json: @questions
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render json: @question
    else 
      render json: { errors: { message: "This question failed to save" } }
    end
  end

private
  def question_params
    params.require(:question).permit(:title)
  end

end 