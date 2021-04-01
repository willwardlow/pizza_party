class Pizza < ApplicationRecord
  belongs_to :user
  has_one :neighborhood
end
