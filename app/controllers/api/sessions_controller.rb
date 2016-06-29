class Api::SessionsController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if @user.nil?
      @user = User.new(username: params[:user][:username])
      render json: @user.errors, status: 422
    else
      log_in!(@user)
      redirect_to '/api/'
    end
  end

  def destroy

    if current_user
      log_out!
      @user = User.new
      render json: {}
    else
      render json: {base: ['Not logged in!']}, status: 404
    end
  end
end
