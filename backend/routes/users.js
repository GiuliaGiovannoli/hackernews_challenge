const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

const authenticatingUser = require('../middlewares/authentication')

const { 
  create_oneUser,
  list_allUsers,
  find_oneUser,
  login_user
} = require('../controllers/UserController')

router.post('/login', login_user)

router.post('/register', 
[
  body("username").notEmpty().withMessage("Username required!"),
  body("email").notEmpty().withMessage("Email required!"),
  body("password").notEmpty().withMessage("Password required!"),
],
create_oneUser)

// router.get('/:id', find_oneUser)
// router.get('/', list_allUsers)

// maybe update user, get info of user and add in model history of create posts

module.exports = router;
