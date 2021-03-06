const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  posts_liked: [ { type: Schema.Types.ObjectId, ref: "Post" } ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;