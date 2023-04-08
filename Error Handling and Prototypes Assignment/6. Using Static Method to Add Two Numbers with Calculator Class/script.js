/*
6. Using Static Method to Add Two Numbers with Calculator Class
Create a class called Calculator with a static method called add. The add method should take two numbers as
arguments and return their sum. Instantiate the Calculator class and call the add method.
*/

// class

class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}

const result = Calculator.add(10, 20);

console.log(result);
