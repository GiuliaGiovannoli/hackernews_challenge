const User = require('../models/userModel')

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

exports.create_oneUser = async (req, res) => {
  const { username, email, password } = req.body
  const user = await User.findOne({email, username})
  if(user) {
    res.status(401).json({
      msg: "User already exists"
  })} else {
    const salt = await bcrypt.genSalt(10)
    saltedPassword = await bcrypt.hash(password, salt)
    User.create({ username, email, password: saltedPassword })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))}
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
  const user = await User.findOne({email})
  if(!user) {
    res.status(401).json({
      msg: "No user found"
  })
  } else {
  const matchingPassword = await bcrypt.compare(password, user.password)
  if (matchingPassword) {
    const payload = { user: {
      id: user._id,
      name: user.username
  }}
    jwt.sign(payload, "secret", { expiresIn: 360000000 },
      (err, token) => {
          if (!err) {
            res.status(200).json({
              msg: "Login successful",
              token: token,
              user : user
          })
          } else {
            console.log(err)}
          })
      } else {
        res.status(401).json({
          msg: "Denied"
      })
      }}
  }
