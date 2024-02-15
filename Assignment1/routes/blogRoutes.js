//Create an endpoint to retrieve all blogs from the system.
// Implement an endpoint for creating new blogs.
// Develop an endpoint to get a specific blog based on the author's ID, ensuring that the author ID provided is an integer.

const express = require('express');
const router = express.Router();
const blogs = [];

// retrieve all blogs from the system
router.get('/', (req, res) => {
  res.json(blogs);
});

// Create a new blogs
router.post('/', (req, res) => {
  const { authorId, title, content } = req.body;
  if (!Number.isInteger(parseInt(authorId))) {
    return res.status(400).json({ message: 'Author ID must be an integer' });
  }
  blogs.push({ authorId, title, content });
  res.status(201).json({ message: 'Blog created' });
});

// get a specific blog based on the author's ID
router.get('/:authorId', (req, res) => {
  const authorId = parseInt(req.params.authorId);
  if (!Number.isInteger(authorId)) {
    return res.status(400).json({ message: 'Author ID must be an integer' });
  }
  const authorBlogs = blogs.filter(blog => blog.authorId === authorId);
  res.json(authorBlogs);
});

module.exports = router;