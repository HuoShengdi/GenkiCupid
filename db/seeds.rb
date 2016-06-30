# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(:username => "rakuraku15",
            :password => "chitoge",
            :postal_code => "92127",
            :gender => "male",
            :orientation => "straight",
            :rel_status => "single",
            :birthdate => Date.new(1998, 5, 15))
Essay.generate_essays(1);
