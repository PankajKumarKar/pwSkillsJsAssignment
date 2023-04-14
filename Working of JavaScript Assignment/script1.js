/*
 Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. 'call the function before it is declared to demonstrate hoisting.
*/

// Call the function before it is declared

const sum = addNumbers(12, 16);
console.log(sum);

// Function declaration
function addNumbers(num1, num2) {
  return num1 + num2;
}
