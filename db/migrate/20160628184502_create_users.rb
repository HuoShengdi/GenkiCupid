class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :avatar_url, null: false
      t.string :postal_code, null: false
      t.date :birthdate, null: false
      t.string :gender, null: false
      t.string :orientation, null: false
      t.string :rel_status, null: false
      t.timestamps null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :gender
    add_index :users, :orientation
    add_index :users, :birthdate
    add_index :users, :rel_status
    add_index :users, :postal_code
  end
end
