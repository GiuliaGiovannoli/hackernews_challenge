const express = require('express');
const router = express.Router();

const { 
  create_oneUser,
  list_allUsers,
  find_oneUser
} = require('../controllers/UserController')

router.get('/:id', find_oneUser)
router.get('/', list_allUsers)
router.post('/', create_oneUser)

module.exports = router;
