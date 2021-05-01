const express = require('express');
const router = express.Router();

const authenticatingUser = require('../middlewares/authentication')

const { 
  create_onePost,
  list_allPosts,
  find_onePost
} = require('../controllers/postController')

router.get('/:id', find_onePost)
router.get('/', list_allPosts)

router.post('/', authenticatingUser, create_onePost)

// next steps: delete and/or update post ?? !! 

module.exports = router;