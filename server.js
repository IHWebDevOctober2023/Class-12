const express = require("express");
const hbs = require("hbs");
const path = require("path")

const mongoose = require("mongoose");

const server = express();

server.set("view engine", "hbs");

server.set("views", path.join(__dirname, "views"));
const User = require("./user.model.js");// here I'm importing the user model to make the CRUD

mongoose.connect("mongodb+srv://Marcel:1234@cluster0.1cbl1ij.mongodb.net/test") // add the name of the database at the end
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((error) => console.log(error));


server.get("/users", (req, res) => {
    User.find()
        .then((users) => {
            res.render("users", { users });
        })
        .catch((error) => console.log(error));
});

/* 
// SAME THING WITH THE ASYNC/AWAIT  DON'T FORGET THE CATCH!
server.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.render("users", { users });
    }
    catch (error) {
        console.log(error);
    }
}); */

// GET POST PUT UPDATE DELETE

server.delete("/users/:id", (req, res) => {
    console.log(req.params.id);
    User.findByIdAndDelete(req.params.id)
        .then((user) => {
            console.log("User deleted is: ", user);
            res.render("successPage"); // to give feedback to the user
        })
        .catch((error) => {
            console.log(error);
        })
});

server.post("/user", (req, res) => {
    const user = {
        username: "Mary Jane"
    };
    User.create(user)
        .then((user) => console.log("User has has been created: ", user))
        .catch((error) => console.log(error));
});

const Post = require("./post.model.js");

server.post("/post", (req, res) => {
    const newPost = {
        title: "My new post",
        content: "This is my new post I'm super happy to be here playing chess with the data team"
    };

    Post.create(newPost)
        .then((post) => {
            res.status(200).send("POST CREATED");
            console.log("Post has has been created: ", post)
        })
        .catch((error) => console.log(error));

})


// NOW I WANT TO CREATE ALL THE USERS THAT I HAVE IN THE JSON FILE

const arrayOfUsers = require("./users.json");

server.post("/users", (req, res) => {
    User.insertMany(arrayOfUsers)
        .then(() => {
            // res.render("users");
            res.status(200).send("USERS CREATED");
            console.log("Users created");
        })
        .catch((error) => console.log(error));
});

server.listen(3000, () => console.log("The server is running on port 3000"));