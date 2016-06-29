class Api::UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    input_params = user_params.except(:verify_password, :birthdate)
    begin
      input_params[:birthdate] = DateTime.new(*user_params[:birthdate].map{|el| el.to_i})
    rescue ArgumentError => e
      input_params[:birthdate] = nil
    end
    @user = User.new(input_params)

    unless user_params[:password] == user_params[:verify_password]
      render json: {base: ["Passwords do not match"]}, status: 422
      return
    end

    if @user.save
      log_in!(@user)
      render 'api/users/show'
    else
      render json: @user.errors, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password,  :verify_password, :avatar_url, :postal_code, :gender, :orientation, :rel_status, :birthdate => [])
  end
end
