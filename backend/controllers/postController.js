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

exports.delete_onePost = async (req, res) => {
  const id = req.params.id
  Post.findByIdAndDelete(id)
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}

exports.update_onePost = async (req, res) => {
  const id = req.params.id
  Post.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}

exports.update_likesOfPost = async (req, res) => {
  const id = req.params.id
  const updateLikesOnly = req.body.tot_likes
  Post.findOneAndUpdate({ _id: id }, { tot_likes: updateLikesOnly }, { new: true })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}