class CreateReflections < ActiveRecord::Migration
  def change
    create_table :reflections do |t|
      t.date    :reflection_date
      t.integer :user_id
      t.integer :productivity_score
      t.integer :happiness_score
      t.integer :health_score
      t.text    :comments

      t.timestamps null: false
    end
  end
end
