class Neighborhood < ApplicationRecord
  has_many :users
  has_one :pizza

end
