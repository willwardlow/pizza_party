class Pizza < ApplicationRecord
  belongs_to :user 
  # has_and_belongs_to_many :likes,
  #   class_name: "User",
  #   foreign_key: "pizza_id",
  #   association_foreign_key: "user_id",
  #   join_table: "pizza_users"

  belongs_to :neighborhood
end
