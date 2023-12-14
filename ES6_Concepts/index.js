// function add(a, b) {
//   return a + b;
// }

// function substract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

const { add, substract, multiply, divide } = require("./mathExp"); // importing

let sum = add(10, 5);

let difference = substract(10, 5);

let quotient = divide(10, 5);

let product = multiply(10, 5);

console.log("Sum: ", sum);

console.log("Difference: ", difference);

console.log("Product: ", product);

console.log("Quotient: ", quotient);
