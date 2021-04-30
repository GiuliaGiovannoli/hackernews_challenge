const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, min: 2, max: 80, required: true, unique: true },
  link: { type: String, min: 2, required: true, unique: true },
  author: { type: String, min: 2, max: 80, required: true },
  tot_likes: { type: Number, default: 0 }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;