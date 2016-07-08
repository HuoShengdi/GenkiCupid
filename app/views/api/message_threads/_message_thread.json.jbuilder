json.extract! message_thread, :id, :sender_id, :recipient_id, :last_updated, :last_message

if current_user.id == message_thread.sender_id
  json.username message_thread.recipient.username
  json.avatar_url message_thread.recipient.avatar_url
else
  json.username message_thread.sender.username
  json.avatar_url message_thread.sender.avatar_url
end
