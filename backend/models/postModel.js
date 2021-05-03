const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true, unique: true },
  link: { type: String, required: true, unique: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  tot_likes: { type: Number, default: 0 }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;