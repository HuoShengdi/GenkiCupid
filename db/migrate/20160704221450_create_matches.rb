class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :user_id, null: false
      t.integer :match_id, null: false
      t.timestamps null: false
    end
    add_index :matches, :user_id
    add_index :matches, :match_id
    add_index :matches, [:user_id, :match_id], unique: true
  end
end
