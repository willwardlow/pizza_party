class CreateNeighborhoods < ActiveRecord::Migration[6.1]
  def change
    create_table :neighborhoods do |t|
      t.string :name
      t.string :city_area
      t.boolean :nearby_transit

      t.timestamps
    end
  end
end
