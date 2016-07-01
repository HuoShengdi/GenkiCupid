class Api::ProfilesController < ApplicationController
  def show
    @user = User.find_by_username(params[:username])
  end

  def update
    @user = User.find_by_username(params[:username])
    update_params = user_params

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:username,:avatar_url, :postal_code, :gender, :orientation, :rel_status, :birthdate)
  end
end
