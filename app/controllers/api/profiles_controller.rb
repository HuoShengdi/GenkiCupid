class Api::ProfilesController < ApplicationController
  def show
    @user = User.find_by_username(params[:username])
  end

  def update
    @user = User.find_by_username(params[:username])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def user_params
    params.require(:user).permit(:avatar_url, :postal_code, :gender, :orientation, :rel_status, :birthdate => [])
  end
end
