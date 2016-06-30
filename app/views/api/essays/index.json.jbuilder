json.array! @essays do |essay|
  json.partial! '/api/essays/essay', essay: essay
end
