const express = require('express');
const router = express.Router();
const Comment = require('../models/tasks');

router.get('/retrieveTasks', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;