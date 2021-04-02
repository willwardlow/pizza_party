# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Neighborhood.destroy_all
Pizza.destroy_all
User.destroy_all

#seeding neighborhoods

@rogers = Neighborhood.create!(name: 'Rogers Park', city_area: 'N', nearby_transit: true)
@west_ridge = Neighborhood.create!(name: 'West Ridge', city_area: 'N', nearby_transit: true)
@uptown = Neighborhood.create!(name: 'Uptown', city_area: 'N', nearby_transit: true)
@lincoln_square = Neighborhood.create!(name: 'Lincoln Square', city_area: 'N', nearby_transit: true)
@edison = Neighborhood.create!(name: 'Edison Park', city_area: 'N', nearby_transit: true)
@norwood = Neighborhood.create!(name: 'Norwood Park', city_area: 'N', nearby_transit: true)
@jefferson = Neighborhood.create!(name: 'Jefferson Park', city_area: 'N', nearby_transit: true)
@forest_park= Neighborhood.create!(name: 'Forest Park', city_area: 'N', nearby_transit: true)
@north_park = Neighborhood.create!(name: 'North Park', city_area: 'N', nearby_transit: true)
@albany = Neighborhood.create!(name: 'Albany Park', city_area: 'N', nearby_transit: true)
@o_hare = Neighborhood.create!(name: 'O\'Hare', city_area: 'N', nearby_transit: true)
@edgewater = Neighborhood.create!(name: 'Edgewater', city_area: 'N', nearby_transit: true)
@north_center = Neighborhood.create!(name: 'North Center', city_area: 'N', nearby_transit: true)
@lakeview = Neighborhood.create!(name: 'Lakeview', city_area: 'N', nearby_transit: true)
@lincoln_park = Neighborhood.create!(name: 'Lincoln Park', city_area: 'N', nearby_transit: true)
@avondale = Neighborhood.create!(name: 'Avondale', city_area: 'N', nearby_transit: true)
@logan = Neighborhood.create!(name: 'Logan Square', city_area: 'NW', nearby_transit: true)
@wicker_park = Neighborhood.create!(name: 'Wicker Park', city_area: 'NW', nearby_transit: true)
@avondale = Neighborhood.create!(name: 'Portage Park', city_area: 'NW', nearby_transit: true)
@irving_park = Neighborhood.create!(name: 'Irving Park', city_area: 'NW', nearby_transit: true)
@dunning = Neighborhood.create!(name: 'Dunning', city_area: 'NW', nearby_transit: true)
@montclare = Neighborhood.create!(name: 'Montclare', city_area: 'NW', nearby_transit: true)
@belmont_cragin = Neighborhood.create!(name: 'Belmont Cragin', city_area: 'NW', nearby_transit: true)
@hermosa = Neighborhood.create!(name: 'Hermosa', city_area: 'NW', nearby_transit: true)
@near_north = Neighborhood.create!(name: 'Near North Side', city_area: 'C', nearby_transit: true)
@loop = Neighborhood.create!(name: 'Loop', city_area: 'C', nearby_transit: true)
@near_west = Neighborhood.create!(name: 'Near West Side', city_area: 'C', nearby_transit: true)
@humboldt = Neighborhood.create!(name: 'Humboldt Park', city_area: 'W', nearby_transit: true)
@west_town = Neighborhood.create!(name: 'West Town', city_area: 'W', nearby_transit: true)
@austin = Neighborhood.create!(name: 'Austin', city_area: 'W', nearby_transit: true)
@west_garfield = Neighborhood.create!(name: 'West Garfield Park', city_area: 'W', nearby_transit: true)
@east_garfied = Neighborhood.create!(name: 'East Garfield Park', city_area: 'W', nearby_transit: true)
@north_lawndale = Neighborhood.create!(name: 'North Lawndale', city_area: 'W', nearby_transit: true)
@south_lawndale = Neighborhood.create!(name: 'South Lawndale', city_area: 'W', nearby_transit: true)
@lower_west = Neighborhood.create!(name: 'Lower West Side', city_area: 'W', nearby_transit: true)
@brighton = Neighborhood.create!(name: 'Brighton Park', city_area: 'SW', nearby_transit: true)
@garfield_ridge = Neighborhood.create!(name: 'Garfield Ridge', city_area: 'SW', nearby_transit: true)
@archer = Neighborhood.create!(name: 'Archer Heights', city_area: 'SW', nearby_transit: true)
@mckinley = Neighborhood.create!(name: 'McKinley Park', city_area: 'SW', nearby_transit: true)
@new_city = Neighborhood.create!(name: 'New City', city_area: 'SW', nearby_transit: true)
@gage = Neighborhood.create!(name: 'Gage Park', city_area: 'SW', nearby_transit: true)
@clearing = Neighborhood.create!(name: 'Clearing', city_area: 'SW', nearby_transit: true)
@west_lawn = Neighborhood.create!(name: 'West Lawn', city_area: 'SW', nearby_transit: true)
@chicago_lawn = Neighborhood.create!(name: 'Chicago Lawn', city_area: 'SW', nearby_transit: true)
@west_englewood = Neighborhood.create!(name: 'West Englewood', city_area: 'SW', nearby_transit: true)
@englewood = Neighborhood.create!(name: 'Englewood', city_area: 'SW', nearby_transit: true)
@auburn = Neighborhood.create!(name: 'Auburn Gresham', city_area: 'SW', nearby_transit: true)
@beverly = Neighborhood.create!(name: 'Beverly', city_area: 'SW', nearby_transit: true)
@washington = Neighborhood.create!(name: 'Washington Park', city_area: 'S', nearby_transit: true)
@greenwood = Neighborhood.create!(name: 'Mount Greenwood', city_area: 'SW', nearby_transit: true)
@morgan_park = Neighborhood.create!(name: 'Morgan Park', city_area: 'SW', nearby_transit: true)
@armour = Neighborhood.create!(name: 'Armour Square', city_area: 'S', nearby_transit: true)
@oakland = Neighborhood.create!(name: 'Oakland', city_area: 'S', nearby_transit: true)
@fuller = Neighborhood.create!(name: 'Fuller Park', city_area: 'S', nearby_transit: true)
@boulevard = Neighborhood.create!(name: 'Grand Boulevard', city_area: 'S', nearby_transit: true)
@kenwood = Neighborhood.create!(name: 'Kenwood', city_area: 'S', nearby_transit: true)
@hyde = Neighborhood.create!(name: 'Hyde Park', city_area: 'S', nearby_transit: true)
@woodlawn = Neighborhood.create!(name: 'Woodlawn', city_area: 'S', nearby_transit: true)
@south_shore = Neighborhood.create!(name: 'South Shore', city_area: 'S', nearby_transit: true)
@bridgeport = Neighborhood.create!(name: 'Bridgeport', city_area: 'S', nearby_transit: true)
@greater_grand = Neighborhood.create!(name: 'Greater Grand Crossing', city_area: 'S', nearby_transit: true)
@chatham = Neighborhood.create!(name: 'Chatam', city_area: 'S', nearby_transit: true)
@avalon = Neighborhood.create!(name: 'Avalon Park', city_area: 'S', nearby_transit: true)
@south_chicago = Neighborhood.create!(name: 'South Chicago', city_area: 'S', nearby_transit: true)
@burnside = Neighborhood.create!(name: 'Burnside', city_area: 'S', nearby_transit: true)
@calumet = Neighborhood.create!(name: 'Calumet Heights', city_area: 'S', nearby_transit: true)
@roseland = Neighborhood.create!(name: 'Roseland', city_area: 'S', nearby_transit: true)
@pullman = Neighborhood.create!(name: 'Pullman', city_area: 'S', nearby_transit: true)
@deering = Neighborhood.create!(name: 'South Deering', city_area: 'S', nearby_transit: true)
@east_side = Neighborhood.create!(name: 'East Side', city_area: 'S', nearby_transit: true)
@west_pullman = Neighborhood.create!(name: 'West Pullman', city_area: 'S', nearby_transit: true)
@riverdale = Neighborhood.create!(name: 'Riverdale', city_area: 'S', nearby_transit: true)
@hegewisch = Neighborhood.create!(name: 'Hegewisch', city_area: 'S', nearby_transit: true)

puts "#{Neighborhood.count} neighborhoods created"
#seeding users
@admin = User.create!(username: 'will', password: '123456', neighborhood: @lincoln_square, email: 'will@email.com')

puts "#{User.count} created"

#seeding pizzas 

Pizza.create!(restaurant_name: 'Tortorice\'s Pizza', pizza_type: 'Thin Crust', neighborhood: @irving_park, user_id: 1, description: 'Gotta try the piasso style pizza for alll you cheese lovers! Two pizza crusts stacked on top with tons of cheese in between. Then sauce, more cheese, adn toppings!', image_url:'https://www.tortoricespizza.com/wp-content/uploads/2020/03/PICASSO-600x308.png.webp')

Pizza.create!(restaurant_name: 'Giordano\'s Pizza', pizza_type: 'Deep Dish', neighborhood: @loop, user_id: 1, description: 'The classic deep dish pizza. Ideal for tourists.', image_url:'https://mediaassets.koaa.com/cordillera-network/wp-content/uploads/sites/11/2018/11/28050722/Giordanos-fixed-1024x576.jpg')

Pizza.create!(restaurant_name: 'D\'agostino\'s ', pizza_type: 'Thin Crust', neighborhood: @lakeview, user: @admin, description:'Thin and crispy crust with layers of cheese and mountains of toppings.', image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/wTwQ1NZx9myfwWtv5f1iyA/348s.jpg')

Pizza.create!(restaurant_name: 'Pequods\'s Pizza', pizza_type: 'Deep Dish', neighborhood: @lincoln_park, user: @admin, description: 'Amazing deep dish. The burnt cheese crust makes it even better!. ', image_url:'https://pequodspizza.com/wp-content/uploads/2017/04/pequods-deep-dish-pizza-chicago.jpg')

Pizza.create!(restaurant_name: 'Piece Brewery', pizza_type: 'Thin Crust', neighborhood: @wicker_park, user: @admin, description: 'Good pizza with creative options. Especially the Atomic pizza, a collaboration with Hot Doug\'s Atomic Sausage! ', image_url: 'https://infatuation.imgix.net/media/images/reviews/piece-brewery-and-pizzeria/Piece%20Pizzeria%20Menu%20Pizza%20%281%29.jpg?auto=format&h=890&w=1336')

puts "#{Pizza.count} pizzas created"
