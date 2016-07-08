# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160707221703) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answer_options", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.string   "body",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "answer_options", ["question_id"], name: "index_answer_options_on_question_id", using: :btree

  create_table "answers", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "question_id", null: false
    t.integer  "option_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "answers", ["user_id", "question_id"], name: "index_answers_on_user_id_and_question_id", unique: true, using: :btree
  add_index "answers", ["user_id"], name: "index_answers_on_user_id", using: :btree

  create_table "essays", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "title",      null: false
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "essays", ["user_id", "title"], name: "index_essays_on_user_id_and_title", unique: true, using: :btree
  add_index "essays", ["user_id"], name: "index_essays_on_user_id", using: :btree

  create_table "filters", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.string   "gender"
    t.string   "orientation"
    t.integer  "min_age"
    t.integer  "max_age"
    t.string   "location"
    t.integer  "distance"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "filters", ["user_id"], name: "index_filters_on_user_id", unique: true, using: :btree

  create_table "matches", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "match_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "matches", ["match_id"], name: "index_matches_on_match_id", using: :btree
  add_index "matches", ["user_id", "match_id"], name: "index_matches_on_user_id_and_match_id", unique: true, using: :btree
  add_index "matches", ["user_id"], name: "index_matches_on_user_id", using: :btree

  create_table "message_threads", force: :cascade do |t|
    t.integer  "sender_id",    null: false
    t.integer  "recipient_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "message_threads", ["recipient_id"], name: "index_message_threads_on_recipient_id", using: :btree
  add_index "message_threads", ["sender_id"], name: "index_message_threads_on_sender_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "author_id",                  null: false
    t.integer  "thread_id",                  null: false
    t.text     "body"
    t.boolean  "read",       default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "messages", ["author_id"], name: "index_messages_on_author_id", using: :btree
  add_index "messages", ["thread_id"], name: "index_messages_on_thread_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "questions", ["body"], name: "index_questions_on_body", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "avatar_url",      null: false
    t.string   "postal_code",     null: false
    t.datetime "birthdate",       null: false
    t.string   "gender",          null: false
    t.string   "orientation",     null: false
    t.string   "rel_status",      null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.float    "latitude"
    t.float    "longitude"
    t.string   "location"
  end

  add_index "users", ["birthdate"], name: "index_users_on_birthdate", using: :btree
  add_index "users", ["gender"], name: "index_users_on_gender", using: :btree
  add_index "users", ["latitude", "longitude"], name: "index_users_on_latitude_and_longitude", using: :btree
  add_index "users", ["orientation"], name: "index_users_on_orientation", using: :btree
  add_index "users", ["postal_code"], name: "index_users_on_postal_code", using: :btree
  add_index "users", ["rel_status"], name: "index_users_on_rel_status", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "visits", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "visitor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "visits", ["user_id"], name: "index_visits_on_user_id", using: :btree
  add_index "visits", ["visitor_id"], name: "index_visits_on_visitor_id", using: :btree

end
