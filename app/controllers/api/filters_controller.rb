class Api::FiltersController < ApplicationController

  def show
    @filter = User.find_by_username(params[:profile_username]).search_filter
  end

  def update
    @filter = User.find_by_username(params[:profile_username]).search_filter

    if @filter.update_attributes(filter_params)
      render :show
    else
      render json: @filter.errors
    end
  end

  def filter_params
    params.require(:search_filter).permit(:gender, :orientation, :min_age, :max_age, :location, :distance)
  end
end
