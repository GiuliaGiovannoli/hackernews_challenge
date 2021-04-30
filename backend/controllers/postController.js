const Post = require('../models/postModel')

exports.create_onePost = async (req, res) => {
  const { title, link, author } = req.body
  Post.create({ title, link, author })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}

exports.list_allPosts = async (req, res) => {
  Post.find()
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}

exports.find_onePost = async (req, res) => {
  const id = req.params.id
  Post.findById(id)
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}