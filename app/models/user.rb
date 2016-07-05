class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token, :ensure_avatar
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :password_digest, presence: true
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :avatar_url, :postal_code, :birthdate, :gender, :orientation, :rel_status, presence: true

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
    foreign_key: :user_id,
    class_name: 'Match',
    dependent: :destroy
  )

  def age
    age = ((Date.today - self.birthdate.to_date)/365).to_i
  end

  def birthday
    self.birthdate.to_date.to_formatted_s
  end

  def self.make_matches
    User.all.each do |user|
      User.all.each do |match|
        next if user == match
        Match.create(user_id: user.id, match_id: match.id)
      end
    end
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

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_avatar
    self.avatar_url ||= "assets/default.png"
  end

end
