class Filter < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true
  validate :age_range_order
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
  
end
