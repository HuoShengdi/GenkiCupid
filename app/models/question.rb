class Question < ActiveRecord::Base
  validates :body, presence: true

  has_many :answer_options
  has_many :answers


  def self.generate(text, answer_array)
    q_new = Question.create(body: text)
    answer_array.each do |option|
      AnswerOption.create(question_id: q_new.id, body: option)
    end
    return q_new
  end
end
