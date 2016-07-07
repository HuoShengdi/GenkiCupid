class CreateFilters < ActiveRecord::Migration
  def change
    create_table :filters do |t|
      t.integer :user_id, null: false
      t.string :gender
      t.string :orientation
      t.integer :min_age
      t.integer :max_age
      t.string :location
      t.integer :distance
      t.timestamps null: false
    end

    add_index :filters, :user_id, unique: true
  end
end
