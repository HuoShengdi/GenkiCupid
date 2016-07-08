json.array! @message_threads do |message_thread|
  json.partial! '/api/message_threads/message_thread', message_thread: message_thread
end
