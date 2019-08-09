const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

// gets all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

/* router.post('/', async (req, res) => {
  try {
    const posts = await Post.find(id: req.body.id);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
}); */

// submits a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
