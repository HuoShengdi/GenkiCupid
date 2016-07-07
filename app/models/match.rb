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
    :profile,
    primary_key: :id,
    foreign_key: :match_id,
    class_name: 'User')


  def match_percent
    questions_answered = self.user.answers.length
    if questions_answered == 0
      return 0
    end
    same_answers = 0
    not_answered = 0
    match_answers = self.profile.answers
    self_answers = self.user.answers
    self_answers.each do |answer|

      match_answer = (match_answers.select {|ans| ans.question_id == answer.question_id})[0]
      if match_answer == nil
        not_answered += 1
        next
      elsif answer.option_id == match_answer.option_id
        same_answers += 1
      end
    end

    ((same_answers.to_f/(questions_answered - not_answered)).round(2) * 100).to_i
  end

  def self.make_matches(username)
    user = User.find_by_username(username)
    User.all.each do |match|
      next if user == match
      Match.create(user_id: user.id, match_id: match.id)
    end
  end

  def profile_details
    {image: profile.avatar_url,
    username: profile.username,
    age: profile.age,
    gender: profile.gender}
  end

end
