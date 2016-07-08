json.array! @messages do |message|
  json.partial! '/api/messages/message', message: message
end

if @truncate == true
  json.hidden_messages @messages.length - 4
end
