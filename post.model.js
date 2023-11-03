const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    published: {
        type: Date,
        default: new Date()
    },
    content: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;