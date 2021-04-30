const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, min: 2, required: true, unique: true },
  password: { type: String, min: 2, required: true },
  username: { type: String, min: 2, required: true, unique: true },
  posts_liked: [ { type: Schema.Types.ObjectId, ref: "Post" } ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;