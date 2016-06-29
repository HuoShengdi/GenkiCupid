class Api::ProfilesController < ApplicationController
  def show
    @user = User.find_by_username(params[:username])
  end

  def update
    @user = User.find_by_username(params[:username])
    update_params = user_params.except(:birthdate)
    begin
      update_params[:birthdate] = DateTime.new(*user_params[:birthdate].map{|el| el.to_i})
    rescue ArgumentError => e
      
    end
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def user_params
    params.require(:user).permit(:username,:avatar_url, :postal_code, :gender, :orientation, :rel_status, :birthdate => [])
  end
end
