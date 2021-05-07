const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

const authenticatingUser = require('../middlewares/authentication')

const { 
  create_oneUser,
  list_allUsers,
  find_oneUser,
  login_user,
  update_user,
  posts_createdByUser
} = require('../controllers/UserController')

router.get('/oneUser/posts/:id', authenticatingUser, posts_createdByUser)

router.post('/login', login_user)

router.post('/register', 
[
  body("username").notEmpty().withMessage("Username required!"),
  body("email").notEmpty().withMessage("Email required!"),
  body("password").notEmpty().withMessage("Password required!"),
],
create_oneUser)

router.get('/:id', authenticatingUser, find_oneUser)
router.put('/:id', authenticatingUser, update_user)

// router.get('/', list_allUsers)

module.exports = router;
