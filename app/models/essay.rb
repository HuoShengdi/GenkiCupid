class Essay < ActiveRecord::Base
  validates :title, :user_id, presence: true;
  validates :title, uniqueness: { scope: [:user_id] }

  belongs_to :user

  ESSAY_TITLES = [
    "My self-summary",
    "What I'm doing with my life",
    "I'm really good at",
    "I spend a lot of time thinking about",
    "You should message me if"
  ]

  def self.generate_essays(user_id)
    ESSAY_TITLES.each do |title|
      Essay.create({user_id: user_id, title: title, body: ""})
    end
  end

end
