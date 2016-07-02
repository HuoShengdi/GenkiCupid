class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits do |t|
      t.integer :user_id, null: false
      t.integer :visitor_id, null: false
      t.timestamps null: false
    end

    add_index :visits, :user_id
    add_index :visits, :visitor_id
  end
end
