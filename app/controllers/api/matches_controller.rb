class Api::MatchesController < ApplicationController
  def index
    user = current_user
    if user
      Match.make_matches(user.username)
      @matches = user.matches
    else
      render json: {base: ['Not logged in!']}, status: 404
    end
  end

  # def show
  #
  # end
end
