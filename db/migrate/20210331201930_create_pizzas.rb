class CreatePizzas < ActiveRecord::Migration[6.1]
  def change
    create_table :pizzas do |t|
      t.string :restaurant_name
      t.text :description
      t.references :neighborhood, null: false, foreign_key: true 

      t.timestamps
    end
  end
end
