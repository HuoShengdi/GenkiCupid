class Answer < ActiveRecord::Base
  validates :user_id, :question_id, :option_id, presence: true

  belongs_to :user
  belongs_to :question
  belongs_to(
    :option,
    primary_key: :id,
    foreign_key: :option_id,
    class_name: 'AnswerOption'
  )

  def question_text
    self.question.body
  end

  def question_options
    options = {}
    self.question.answer_options.each {|el| options[el.id] = el.body}
    options
  end
end
