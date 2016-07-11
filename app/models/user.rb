class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token, :ensure_avatar
  after_save :ensure_filter_default
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :password_digest, presence: true
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :avatar_url, :postal_code, :birthdate, :gender, :orientation, :rel_status, presence: true
  validates :postal_code, length: {minimum: 5}

  geocoded_by :postal_code do |user, results|
    if geo = results.first
      user.latitude = geo.latitude
      user.longitude = geo.longitude
      user.location = "#{geo.city}, #{geo.state_code}"
    end
  end

  after_validation :geocode, if: :should_query?

  has_many :essays, dependent: :destroy
  has_many :answers, dependent: :destroy
  has_many(
    :matches,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Match',
    dependent: :destroy
  )
  has_many(
    :other_matches,
    primary_key: :id,
    foreign_key: :match_id,
    class_name: 'Match',
    dependent: :destroy
  )
  has_one(
    :search_filter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Filter',
    dependent: :destroy
  )

  has_many(
    :answered_questions, through: :answers, source: :question
  )

  has_many :messages, :foreign_key => :author_id
  has_many :threads_started, :foreign_key => :sender_id, class_name: 'MessageThread'
  has_many :threads_received, :foreign_key => :recipient_id, class_name: 'MessageThread'


  def age
    age = ((Date.today - self.birthdate.to_date)/365).to_i
  end

  def birthday
    self.birthdate.to_date.to_formatted_s
  end

  def message_threads
    threads_started + threads_received
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?

    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def fill_questions
    answered_questions = self.answered_questions
    Question.all.map do |question|
      next if answered_questions.include?(question)
      option_ids = question.answer_options.map {|option| option.id}
      self.create_answer(question_id: question.id, option_id: option_ids.sample)
    end
  end

  def should_query?
    if self.postal_code.present?
      if self.postal_code_changed? || self.location == nil
        return true
      end
    else
      return false
    end
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_avatar
    self.avatar_url ||= "GenkiCupid_Avatars/default.png"
  end

  def ensure_filter_default
    gender = nil
    if self.gender == "male"
      if self.orientation == "straight"
        gender = "female"
      elsif self.orientation == "gay"
        gender = "male"
      end
    elsif self.gender == "female"
      if self.orientation == "straight"
        gender = "male"
      elsif self.orientation == "gay"
        gender = "female"
      end
    end

    if self.age <= 20
      min_age = self.age - 2
    else
      min_age = 18
    end

    if self.age < 18
      max_age = 20
    else
      max_age = self.age + 4
    end

    self.search_filter ||= Filter.new(user_id: self.id, gender: gender,
      min_age: min_age, max_age: max_age, postal_code: self.postal_code,
      distance: 25)
  end
end
