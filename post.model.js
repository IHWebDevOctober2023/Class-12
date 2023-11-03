const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    // published: new Date(),
    content: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;