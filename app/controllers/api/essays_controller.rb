class Api::EssaysController < ApplicationController
  def index
    puts params
    user = User.find_by_username(params[:profile_username])
    user ? @essays = user.essays : @essays = []
  end

  def show
    @essay = Essay.find(params[:id])
  end

  def update
    @essay = Essay.find(params[:id])

    if @essay.update_attributes(essay_params)
      render :show
    else
      render json: @essay.errors
    end
  end

  def essay_params
    params.require(:essay).permit(:title, :body)
  end
end
