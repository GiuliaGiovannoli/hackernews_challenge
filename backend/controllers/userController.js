const User = require('../models/userModel')

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

exports.create_oneUser = async (req, res) => {
  const { username, email, password } = req.body
  const salt = await bcrypt.genSalt(10);
  saltedPassword = await bcrypt.hash(password, salt);
  User.create({ username, email, password: saltedPassword })
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

exports.login_user = async (req, res) => {
  const { email, password } = req.body
  const user = User.findOne({email})
  const matchingPassword = bcrypt.compare(password, user.password)
  if (matchingPassword) {
    user
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))
  }
}