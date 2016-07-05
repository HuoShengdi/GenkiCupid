class Match < ActiveRecord::Base
  validates :user_id, :match_id, presence: true
  validates :match_id, uniqueness: {scope: [:user_id]}

  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
    )

  belongs_to(
    :user_match,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User')


  def match_calc
    questions_answered = self.user.answers.length
    if questions_answered == 0
      return 0
    end
    same_answers = 0
    not_answered = 0
    self.user_match.answers.each do |answer|
      self_answer = self.user.answers.where(:question_id == answer.question_id)[0]
      if !answer
        not_answered += 1
        next
      elsif answer.option == self_answer.option
        same_answers += 1
      end
    end

    (same_answers.to_f/(questions_answered - not_answered)).round(2)
  end


end
