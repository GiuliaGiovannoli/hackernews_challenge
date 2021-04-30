const express = require('express');
const router = express.Router();

const { 
  create_onePost
} = require('../controllers/postController')

router.post('/', create_onePost)

module.exports = router;