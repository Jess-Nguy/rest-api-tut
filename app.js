// Import the package(express).
const express = require("express");
const app = express();

// Middlewares. Function for when routes are being hit. Can do: app.use('auth'); to authenticate the user.
app.use('/posts', () => {
    console.log('This is a middleware running');
});

// ROUTES. get, post, delete, patch(update). '/' is the base url page.
app.get('/', (req, res) => {
    res.send('We are on home');
});

// http://localhost:3000/posts
app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

// How do we start listening to the server
app.listen(3000);
