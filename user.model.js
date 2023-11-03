const mongoose = require("mongoose");

const Schema = mongoose.Schema; // Schema is a class!!!

const userSchema = new Schema({
    lastname: {
        type:String,
        required: true
    },
    bootcamp:{
        type: String,
        enum: ["Web Dev", "Data", "UX/UI"]
    },
    username: String
}); // we are creating here an object that belongs to the schema class
// now mongoDB has already a reference to use this schema and find all the properties

const User = mongoose.model("User", userSchema); // we are creating the "layout" for our users
// in my server I'm going to use this model to FIND USERS, to UPDATE USERS, to DELETE USERS and CREATE THEM

// CREATE READ UPDATE and DELETE

// CRUD

module.exports = User;

