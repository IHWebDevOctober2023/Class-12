// DESTRUCTURING MY BRAIN

// Extract values from objects and arrays. And store them in variables

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [firstNumber, secondNumber, thirdNumber, forthNumber] = numbers; // not very common but possible

const lastNumber = numbers[numbers.length - 1];

const numbersWithNumbers = [1, 2, 3, [4, 5]];

const [a, b, c, [d, e]] = numbersWithNumbers; // not common at all, just FYI


// What is super usefull is desctructuring in objects


const person = {
    username: 'John Doe',
    age: 30,
    bootcamp: "Web dev",
    address: {
        street: '123 fake St',
        city: 'New York',
        state: 'NY'
    }
};

// const { address: { street } } = person;
// this is the same as:
const { street, city, state } = person.address; // <--- This is more common

const {username, age, ...rest} = person;

rest.address = "BARCELONA THIS IS A STRING AND THAT'S ALL";



const post = {
    title: "The post of today",
    content: "Hello, welcome to the amazing world of destructuring",
    extraInfo: {
        date: "20-1-2023",
        user: "John"
    }
}

// post.title = "The post of yesterday";

const newPost = {... post };
newPost.title = "THIS IS THE NEW POST TITLE";

newPost.extraInfo.date = "this is a new date";

console.log(post.extraInfo);
