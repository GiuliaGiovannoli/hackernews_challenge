const Post = require('../models/postModel')

exports.create_onePost = async (req, res) => {
  const { title, link, author } = req.body
  Post.create({ title, link, author })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}