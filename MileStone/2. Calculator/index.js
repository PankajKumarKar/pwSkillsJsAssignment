/*
2 Calculator
Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
to perform the operation on the two numbers.
The calculator function should:
* Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator.
* Use a switch statement to determine which operation to perform based on the value of the operator.
* If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a variable called result.
| If the operator is not one of the valid operators, log "Invalid operator" to the console.
*/

let num1, num2, operation, result;

num1 = parseInt(prompt("Enter First Number"));
num2 = parseInt(prompt("Enter Second Number"));

operation = prompt("Enter Operation (+, -, *, /)");

//Operation Code
switch (operation) {
  case "+":
    result = num1 + num2;
    document.write("Addition:", +result);
    break;
  case "-":
    result = num1 - num2;
    document.write("Subtraction:", +result);
    break;
  case "*":
    result = num1 * num2;
    document.write("Multiplication:", +result);
    break;
  case "/":
    result = num1 / num2;
    document.write("Division:", +result);
    break;
  default:
    console.log("Invalid operator");
    break;
}
