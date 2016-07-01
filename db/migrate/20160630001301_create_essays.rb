class CreateEssays < ActiveRecord::Migration
  def change
    create_table :essays do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :body
      t.timestamps null: false
    end

    add_index :essays, :user_id
  end
end
