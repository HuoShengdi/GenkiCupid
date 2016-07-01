Essay.create!([
  {user_id: 1, title: "I'm really good at", body: "Cooking things of all kinds"},
  {user_id: 1, title: "My self-summary", body: "Third-year at Bonyari High"},
  {user_id: 1, title: "What I'm doing with my life", body: "Trying to figure out love ;__;"},
  {user_id: 1, title: "I spend a lot of time thinking about", body: "Animals! I love taking care of them. They don't like me very much though..."},
  {user_id: 1, title: "You should message me if", body: "you like animals or sweets\nyou think you can get along well with my dad's goons. They're way too clingy, honestly."}
])
User.create!([
  {username: "rakuraku15", password:"chitoge", avatar_url: "assets/default.png", postal_code: "92127", birthdate: "1998-05-15 00:00:00", gender: "male", orientation: "straight", rel_status: "single"}
])
