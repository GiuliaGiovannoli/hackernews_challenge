const express = require('express');
const router = express.Router();

const authenticatingUser = require('../middlewares/authentication')

const { 
  create_onePost,
  list_allPosts,
  find_onePost,
  delete_onePost,
  update_onePost,
  update_likesOfPost
} = require('../controllers/postController')

router.put('/likes/:id', update_likesOfPost)
router.put('/:id', authenticatingUser, update_onePost)
router.delete('/:id', authenticatingUser, delete_onePost)
router.get('/:id', find_onePost)
router.get('/', list_allPosts)

router.post('/', authenticatingUser, create_onePost)

module.exports = router;