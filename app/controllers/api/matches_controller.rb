class Api::MatchesController < ApplicationController
  def index
    user = current_user
    if user
      Match.make_matches(user.username)
      filter = user.search_filter
      filter_options = {}
      unless filter.gender == "everyone"
        filter_options[:gender] = filter.gender
      end
      filter_options[:birthdate] = (Date.today - filter.max_age*365)..(Date.today - filter.min_age*365)
      @matches = user.matches.includes(:profile, :user).joins(:profile).where({users:filter_options})
      if filter.distance
        @matches = @matches.select {|match| match.distance_away <= filter.distance}
      end
    else
      render json: {base: ['Not logged in!']}, status: 404
    end
  end

  def filtered_index
    user = current_user
    if user
      Match.make_matches(user.username)
      filter = user.search_filter
      filter_options = {}
      unless filter.gender == "everyone"
        filter_options[:gender] = filter.gender
      end
      filter_options[:birthdate] = (Date.today - filter.max_age*365)..(Date.today - filter.min_age*365)
      @matches = user.matches.joins(:profile).where({users:filter_options})
      if filter.distance
        @matches = @matches.select {|match| match.distance_away <= filter.distance}
      end
    else
      render json: {base: ['Not logged in!']}, status: 404
    end
  end
end
