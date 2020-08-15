const express = require("express");
const router = express.Router();

// ROUTES. get, post, delete, patch(update). '/' is the base url page.
// http://localhost:3000/user
router.get('/', (req, res) => {
    res.send('We are on user');
});

// http://localhost:3000/user/admin
router.get('/admin', (req, res) => {
    res.send('ADMIN');
});


module.exports = router;