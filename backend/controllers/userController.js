const User = require('../models/userModel')

exports.create_oneUser = async (req, res) => {
  const { username, email, password } = req.body
  User.create({ username, email, password })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}

exports.list_allUsers = async (req, res) => {
  User.find()
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}

exports.find_oneUser = async (req, res) => {
  const id = req.params.id
  User.findById(id)
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))
}