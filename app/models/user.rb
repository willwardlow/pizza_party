class User < ApplicationRecord
  has_secure_password

  has_many :pizzas
  has_many :likes
  belongs_to :neighborhood

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  


end
