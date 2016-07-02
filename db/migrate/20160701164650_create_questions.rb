class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text :body, null: false
      t.timestamps null: false
    end

    add_index :questions, :body, unique: true;
  end
end
