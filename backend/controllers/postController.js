const Post = require('../models/postModel')

exports.create_onePost = async (req, res) => {
  const { title, link, author, about, category } = req.body
  const post = await Post.findOne({title, link})
  if(post) {
    res.status(401).json({
      msg: "Post already exists"
  })} else {
  Post.create({ title, link, author, about, category })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))}
}

exports.list_allPosts = async (req, res) => {
  Post.find().populate('author')
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}

exports.find_onePost = async (req, res) => {
  const id = req.params.id
  const post = await Post.findById(id).populate('author')
  if(!post) {
    res.status(401).json({
      msg: "Post does not exist."
  })} else {
  Post.findById(id)
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))}
}

exports.delete_onePost = async (req, res) => {
  const id = req.params.id
  const post = await Post.findById(id)
  if(!post) {
    res.status(401).json({
      msg: "Post does not exist."
  })} else {
  Post.findByIdAndDelete(id)
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))}
}

exports.update_onePost = async (req, res) => {
  const id = req.params.id
  const post = await Post.findById(id)
  if(!post) {
    res.status(401).json({
      msg: "Post does not exist."
  })} else {
  Post.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))}
}

exports.update_likesOfPost = async (req, res) => {
  const id = req.params.id
  const updateLikesOnly = req.body.tot_likes
  const post = await Post.findById(id)
  if(!post) {
    res.status(401).json({
      msg: "Post does not exist."
  })} else {
  Post.findOneAndUpdate({ _id: id }, { tot_likes: updateLikesOnly }, { new: true })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))}
}