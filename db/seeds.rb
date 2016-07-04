Answer.create!([
  {user_id: 1, question_id: 1, option_id: 1}
])
AnswerOption.create!([
  {question_id: 1, body: "The Sun"},
  {question_id: 1, body: "The Earth"},
  {question_id: 1, body: "Me"},
  {question_id: 2, body: "Yes"},
  {question_id: 2, body: "No"},
  {question_id: 3, body: "Yes"},
  {question_id: 3, body: "No"},
  {question_id: 4, body: "Yes"},
  {question_id: 4, body: "No"},
  {question_id: 5, body: "Cat"},
  {question_id: 5, body: "Dog"},
  {question_id: 5, body: "Both"},
  {question_id: 5, body: "Neither"},
  {question_id: 6, body: "Vegetarian"},
  {question_id: 6, body: "Vegan"},
  {question_id: 6, body: "Neither"},
  {question_id: 7, body: "Love"},
  {question_id: 7, body: "Wealth"},
  {question_id: 7, body: "Expression"},
  {question_id: 7, body: "Knowledge"},
  {question_id: 8, body: "Good"},
  {question_id: 8, body: "Bad"},
  {question_id: 9, body: "Yes"},
  {question_id: 9, body: "No"},
  {question_id: 10, body: "Yes"},
  {question_id: 10, body: "No"},
  {question_id: 11, body: "Yes"},
  {question_id: 11, body: "No"},
  {question_id: 12, body: "Yes"},
  {question_id: 12, body: "No"},
  {question_id: 13, body: "Yes"},
  {question_id: 13, body: "No"},
  {question_id: 14, body: "Yes"},
  {question_id: 14, body: "No"},
  {question_id: 15, body: "Yes"},
  {question_id: 15, body: "No"},
  {question_id: 16, body: "Very inclined"},
  {question_id: 16, body: "Somewhat inclined"},
  {question_id: 16, body: "Not inclined"},
  {question_id: 17, body: "Admirable and desirable. Chivalry's not dead."},
  {question_id: 17, body: "Unnecessary but appreciated."},
  {question_id: 17, body: "Sexist and insulting; women are perfectly capable."},
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
  {body: "What do the planets of the solar system revolve around?"},
  {body: "Are you a morning person?"},
  {body: "Could you date someone who was really messy?"},
  {body: "Do you ever ignore people?"},
  {body: "Are you a cat person or a dog person?"},
  {body: "Are you either vegetarian or vegan?"},
  {body: "If you had to name your greatest motivation in life thus far, what would it be?"},
  {body: "If you don't do anything at all for an entire day, how does that make you feel?"},
  {body: "Do you like to cuddle?"},
  {body: "Can anything be made the subject of a joke?"},
  {body: "Do you believe in fate?"},
  {body: "Is jealousy healthy in a relationship?"},
  {body: "Do you enjoy intense intellectual conversations?"},
  {body: "Do you often find yourself worrying about things that you have no control over?"},
  {body: "Is love overrated?"},
  {body: "Outside of work and school, how inclined are you to investigate something that interests you?"},
  {body: "When men show extra courtesy toward women (opening doors, pulling out chairs, etc.), this is:"}
])
User.create!([
  {username: "rakuraku15", password_digest: "$2a$10$Om1ZTZTjfbi/3DTMNo/B3.g8ion69G/RNu5vOCaMrNs9vALecXTqa", session_token: "eU-ubTbSYltUHofBBmFeLg", avatar_url: "assets/default.png", postal_code: "92127", birthdate: "1998-05-15 00:00:00", gender: "male", orientation: "straight", rel_status: "single"},
  {username: "ItoshikiWish", password_digest: "$2a$10$DDdryKDm4UY/K0phU8w9felP/K0Dnn0c3oJ3xPsDTSEN3.CVHq4my", session_token: "fhFoGTZHJeXJ6cbEFZ3B2A", avatar_url: "assets/default.png", postal_code: "44444", birthdate: "1982-11-04 00:00:00", gender: "male", orientation: "straight", rel_status: "single"}
])
