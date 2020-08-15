// Import the package(express).
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
// This makes all the routes "start" with `/posts` in posts.js 
app.use('/posts', postsRoute);
app.use('/user', userRoute);
// Middlewares. Function for when routes are being hit. Can do: app.use('auth'); to authenticate the user.
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// });

// http://localhost:3000/posts
app.get('/posts', (req, res) => {
    res.send('We are on home');
});

// Connect to Databse
mongoose.connect(
   process.env.DB_CONNECTION,
    { useUnifiedTopology: true } ,
    () => console.log('connected to the DB!')
);

// How do we start listening to the server
app.listen(3000);
