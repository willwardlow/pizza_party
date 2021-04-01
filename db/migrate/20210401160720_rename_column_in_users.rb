class RenameColumnInUsers < ActiveRecord::Migration[6.1]
  def change
    change_column_default :users, :password_digest, :password
  end
end
