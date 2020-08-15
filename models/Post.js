const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

// mongoose.Schema({
//     username: String,
//     password: String
// });


// Created a module, gave it the name `Posts` and gave it the schema to use. 
module.exports = mongoose.model('Posts', PostSchema);