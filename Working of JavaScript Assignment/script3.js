/*
3. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.
*/
// Call the function before it is declared
const sum = addNumbers(10, 20);
console.log(sum);


//// Function declaration


function addNumbers(num1, num2) {
  console.log(add); //undefined
  var add = num1 + num2;
  return add;
}
