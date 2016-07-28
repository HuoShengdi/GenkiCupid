class Essay < ActiveRecord::Base
  validates :title, :user_id, presence: true;
  validates :title, uniqueness: { scope: [:user_id] }

  belongs_to :user

  ESSAY_TITLES = [
    "Favorite Pokemon",
    "Favorite Chuck Norris fact",
    "Favorite Star Wars quote",
    "My superhero name and power",
    "I would love to..."
  ]

  def self.generate_essays(user_id)
    ESSAY_TITLES.each_with_index do |title, i|
      body = ""
      # case i
      # when 0
      #   body = Faker::Pokemon.name
      # when 1
      #   body = Faker::ChuckNorris.fact
      # when 2
      #   body = Faker::StarWars.quote
      # when 3
      #   body = Faker::Superhero.name + ", with the power of " + Faker::Superhero.power
      # when 4
      #   body = Faker::Company.bs
      # end
      Essay.create({user_id: user_id, title: title, body: body})
    end
  end

end
