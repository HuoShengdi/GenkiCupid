class AddIndicestoUsers < ActiveRecord::Migration
  def change
    add_index :users, :gender
    add_index :users, :orientation
    add_index :users, :birthdate
    add_index :users, :rel_status
    add_index :users, :postal_code
  end
end
