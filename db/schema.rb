# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_01_175840) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "neighborhoods", force: :cascade do |t|
    t.string "name"
    t.string "city_area"
    t.boolean "nearby_transit"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pizzas", force: :cascade do |t|
    t.string "restaurant_name"
    t.text "description"
    t.bigint "neighborhood_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "pizza_type"
    t.bigint "user_id", null: false
    t.string "image_url"
    t.index ["neighborhood_id"], name: "index_pizzas_on_neighborhood_id"
    t.index ["user_id"], name: "index_pizzas_on_user_id"
  end

  create_table "pizzas_users", id: false, force: :cascade do |t|
    t.bigint "pizza_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest", default: "password"
    t.bigint "neighborhood_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["neighborhood_id"], name: "index_users_on_neighborhood_id"
  end

  add_foreign_key "pizzas", "neighborhoods"
  add_foreign_key "pizzas", "users"
  add_foreign_key "users", "neighborhoods"
end
