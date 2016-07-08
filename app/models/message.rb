class Message < ActiveRecord::Base
  belongs_to(
    :message_thread,
    :primary_key => :id,
    :foreign_key => :thread_id,
    :class_name => 'MessageThread')

  belongs_to :author, :foreign_key => :author_id, :class_name => 'User'

  validates_presence_of :body, :thread_id, :author_id

  def message_time
    if created_at.getlocal > Date.today
      return created_at.getlocal.strftime("%l:%M %p")
    elsif created_at.getlocal < Date.today && created_at.getlocal > Date.yesterday
      return "Yesterday"
    elsif created_at.getlocal < Date.yesterday && created_at.getlocal > Date.today << 6
      return created_at.getlocal.strftime("%b %d")
    else
      return created_at.getlocal.strftime("%m/%d/%y")
    end
  end

  def username
    author.username
  end

  def avatar_url
    author.avatar_url
  end
end
