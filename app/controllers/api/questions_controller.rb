class Api::QuestionsController < ApplicationController
  def show
    @question = Question.find(params[:id])
  end

  def index
    questions = Question.unanswered_questions(params[:username])
    @question = questions.sample
    render :show
  end
end
