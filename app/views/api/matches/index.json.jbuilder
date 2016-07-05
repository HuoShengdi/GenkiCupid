json.array! @matches do |match|
  json.partial! '/api/matches/match', match: match
end
