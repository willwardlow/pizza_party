class CreateJoinTablePizzasUsers < ActiveRecord::Migration[6.1]
  def change
    create_join_table :pizzas, :users do |t|
      # t.index [:pizza_id, :user_id]
      # t.index [:user_id, :pizza_id]
    end
  end
end
