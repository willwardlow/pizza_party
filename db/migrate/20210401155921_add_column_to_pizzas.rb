class AddColumnToPizzas < ActiveRecord::Migration[6.1]
  def change
    add_reference :pizzas, :user, null: false, foreign_key: true
  end
end
