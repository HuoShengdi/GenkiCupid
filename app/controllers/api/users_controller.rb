class Api::UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    unless user_params[:password] == user_params[:verify_password]
      render json: {base: ["Passwords do not match"]}, status: 422
      return
    end

    input_params = user_params.except(:verify_password)

    @user = User.new(input_params)

    if @user.save
      log_in!(@user)
      Essay.generate_essays(@user.id)
      render 'api/users/show'
    else
      render json: @user.errors, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password,  :verify_password, :avatar_url, :postal_code, :gender, :orientation, :rel_status, :birthdate)
  end
end
