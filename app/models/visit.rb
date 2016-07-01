class Visit < ActiveRecord::Base
  validates :user_id, :visitor_id, presence: true
end
