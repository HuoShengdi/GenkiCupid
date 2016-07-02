class AnswerOption < ActiveRecord::Base
  validates :question_id, :body, presence: true

  belongs_to :question
  has_many :answers, inverse_of: :option, dependent: :destroy
end
