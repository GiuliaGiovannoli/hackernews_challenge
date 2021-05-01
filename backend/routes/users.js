const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

const { 
  create_oneUser,
  list_allUsers,
  find_oneUser
} = require('../controllers/UserController')

router.post('/register', 
[
  body("username").notEmpty().withMessage("Username required!"),
  body("email").notEmpty().withMessage("Email required!"),
  body("password").notEmpty().withMessage("Password required!"),
],
create_oneUser)

// router.get('/login', )
router.get('/:id', find_oneUser)
router.get('/', list_allUsers)

module.exports = router;
