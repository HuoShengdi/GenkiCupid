Answer.create!([
  {user_id: 1, question_id: 1, option_id: 1}
])
AnswerOption.create!([
  {question_id: 1, body: "The Sun"},
  {question_id: 1, body: "The Earth"}
])
Essay.create!([
  {user_id: 1, title: "I'm really good at", body: "Cooking things of all kinds"},
  {user_id: 1, title: "My self-summary", body: "Third-year at Bonyari High"},
  {user_id: 1, title: "What I'm doing with my life", body: "Trying to figure out love ;__;"},
  {user_id: 1, title: "I spend a lot of time thinking about", body: "Animals! I love taking care of them. They don't like me very much though..."},
  {user_id: 1, title: "You should message me if", body: "you like animals or sweets\nyou think you can get along well with my dad's goons. They're way too clingy, honestly."},
  {user_id: 2, title: "My self-summary", body: ""},
  {user_id: 2, title: "What I'm doing with my life", body: ""},
  {user_id: 2, title: "I'm really good at", body: ""},
  {user_id: 2, title: "I spend a lot of time thinking about", body: ""},
  {user_id: 2, title: "You should message me if", body: ""}
])
Question.create!([
  {body: "What do the planets of the solar system revolve around?"}
])
User.create!([
  {username: "rakuraku15", password_digest: "$2a$10$Om1ZTZTjfbi/3DTMNo/B3.g8ion69G/RNu5vOCaMrNs9vALecXTqa", session_token: "eU-ubTbSYltUHofBBmFeLg", avatar_url: "assets/default.png", postal_code: "92127", birthdate: "1998-05-15 00:00:00", gender: "male", orientation: "straight", rel_status: "single"},
  {username: "ItoshikiWish", password_digest: "$2a$10$DDdryKDm4UY/K0phU8w9felP/K0Dnn0c3oJ3xPsDTSEN3.CVHq4my", session_token: "fhFoGTZHJeXJ6cbEFZ3B2A", avatar_url: "assets/default.png", postal_code: "44444", birthdate: "1982-11-04 00:00:00", gender: "male", orientation: "straight", rel_status: "married"}
])
