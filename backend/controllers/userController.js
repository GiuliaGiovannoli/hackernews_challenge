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
  const idTarget = req.params.id
  const user = User.findById(idTarget).populate('posts_liked')
  if(!user) {
    res.status(401).json({
      msg: "No user found"
  })
  } else {
  user
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))}
}

exports.update_user = async (req, res) => {
  //no for password! only for the rest of the user model
  const idTarget = req.params.id
  const userTarget = await User.findById(idTarget)
  if(!userTarget) {
    res.status(401).json({
      msg: "No user found"
  })
  } else if(userTarget) {
    const { username, email } = req.body
    const user = await User.findOne({email, username})
    if(user) {
      res.status(401).json({
        msg: "User already exists"
    })} else if (!user) {
      User.findOneAndUpdate({ _id: idTarget }, { ...req.body }, { new: true })
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err.message))}
    }  
} 

exports.login_user = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({email}).populate('posts_liked')
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

exports.posts_createdByUser = async (req, res) => {
  const idTarget = req.params.id
  const user = await User.findById(idTarget)
  if(!user) {
    res.status(401).json({
      msg: "No user found"
  })
  } else {
    User.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "username",
          foreignField: "author",
          as: "postsCreated"
        }
      }, { $match: { "postsCreated.author": user.username } }
    ])
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err.message))}
}