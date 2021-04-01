class AddColumnToPizzaTable < ActiveRecord::Migration[6.1]
  def change
    add_column :pizzas, :image_url, :string
  end
end
