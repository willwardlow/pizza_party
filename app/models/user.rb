class User < ApplicationRecord
  has_secure_password

  has_many :pizzas
  # has_and_belongs_to_many :likes,
  #   class_name: "Pizza",
  #   foreign_key: "user_id",
  #   association_foreign_key: "pizza_id",
  #   join_table: "pizzas_users"
  belongs_to :neighborhood

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { within: 6..40 }

end
