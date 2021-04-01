class AddColumnToPizzasTable < ActiveRecord::Migration[6.1]
  def change
    add_column :pizzas, :pizza_type, :string
  end
end
