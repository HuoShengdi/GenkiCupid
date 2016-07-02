class CreateAnswerOptions < ActiveRecord::Migration
  def change
    create_table :answer_options do |t|
      t.integer :question_id, null: false
      t.string :body, null: false
      t.timestamps null: false
    end

    add_index :answer_options, :question_id
  end
end
