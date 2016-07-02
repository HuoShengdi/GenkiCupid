class Api::AnswersController < ApplicationController
  def index
    user = User.find_by_username(params[:profile_username])
    user ? @answers = user.answers : @answers = []
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def create
    user = User.find_by_username(params[:profile_username])
    @answer = Answer.new(
      user_id: user.id,
      question_id: answer_params[:question_id],
      option_id: answer_params[:option_id])

    if @answer.save
      render :show
    else
      render json: @answer.errors
    end

  end

  def update
    @answer = Answer.find(params[:id])

    if @answer.update_attributes(answer_params)
      render :show
    else
      render json: @answer.errors
    end

  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy!
    render :show
  end
  
  private
  def answer_params
    params.require(:answer).permit(:question_id, :option_id)
  end
end
