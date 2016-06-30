class CheckUniquenessOfUserAndTitleOnEssays < ActiveRecord::Migration
  def change
    add_index :essays, [:user_id, :title], unique: true
  end
end
