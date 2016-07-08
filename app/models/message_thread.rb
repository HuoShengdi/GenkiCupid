class MessageThread < ActiveRecord::Base
  belongs_to :sender, :foreign_key => :sender_id, class_name: 'User'
  belongs_to :recipient, :foreign_key => :recipient_id, class_name: 'User'

  has_many(
    :messages,
    :primary_key => :id,
    :foreign_key => :thread_id,
    :class_name => 'Message',
    inverse_of: :message_thread,
    dependent: :destroy
    )

  validates_uniqueness_of :sender_id, :scope => :recipient_id

  scope :between, -> (sender_id,recipient_id) do
    where("(message_threads.sender_id = ? AND message_threads.recipient_id = ? ) OR (message_threads.sender_id = ? AND message_threads.recipient_id = ? )", sender_id,recipient_id, recipient_id, sender_id)
  end

  def last_updated
    messages.last.message_time if messages.last
  end

  def last_message
    messages.last.body if messages.last
  end

  def update_time
    messages.last.created_at if messages.last
  end
end
