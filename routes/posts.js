const express = require("express");
const router = express.Router();
const Post = require('../models/Post');

// ROUTES. get, post, delete, patch(update). '/' is the base url page.
// http://localhost:3000/posts
router.get('/', (req, res) => {
    res.send('We are on posts');
});

// http://localhost:3000/posts/specific
router.get('/specific', (req, res) => {
    res.send('SPECIFIC');
});

router.post('/', (req, res) => {
    console.log(req.body);
});


module.exports = router;