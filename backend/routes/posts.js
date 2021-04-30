const express = require('express');
const router = express.Router();

const { 
  create_onePost,
  list_allPosts,
  find_onePost
} = require('../controllers/postController')

router.get('/:id', find_onePost)
router.get('/', list_allPosts)
router.post('/', create_onePost)

module.exports = router;