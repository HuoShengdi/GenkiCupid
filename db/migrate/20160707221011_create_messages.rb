class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.integer :thread_id, null: false
      t.text :body
      t.boolean :read, :default => false
      t.timestamps null: false
    end

    add_index :messages, :author_id
    add_index :messages, :thread_id
  end
end
