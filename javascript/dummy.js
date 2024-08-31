// dummy.js

// Simple function declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Using an arrow function with an array method
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);

// Conditional statement
if (numbers.length > 3) {
  console.log("More than three numbers.");
} else {
  console.log("Three or less.");
}

// For loop example
for (let i = 0; i < numbers.length; i++) {
  console.log(`Number: ${numbers[i]}`);
}

// Object manipulation
const person = {
  name: "John",
  age: 30
};

person.email = "john@example.com";

// Function that returns an object
function createPerson(name, age) {
  return {
      name,
      age
  };
}

// Call the function
const bob = createPerson("Bob", 25);
console.log(bob);

// Exporting a function
module.exports = { greet, createPerson };
