class Filter < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true
  validates :postal_code, length: {minimum: 5, allow_nil: true}
  validate :age_range_order
  geocoded_by :postal_code do |fil, results|
    if geo = results.first
      fil.latitude = geo.latitude
      fil.longitude = geo.longitude
      fil.location = "#{geo.city}, #{geo.state_code}"
    end
  end

  after_validation :geocode, if: :should_query?

  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
  )

  def age_range_order
    if self.min_age && self.max_age
      if self.min_age > self.max_age
        self.errors.add_to_base("Minimum age cannot be older than maximum age")
      end
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

end
