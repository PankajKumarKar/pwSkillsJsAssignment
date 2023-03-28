/*
9. Check for divisibility
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
Use a for loop and continue statement.
*/

let numbers = [];
let length;
let org = [];
let j = 0;

length = parseInt(prompt("Enter Array Length"));

//loop for takes input

for (let i = 0; i < length; i++) {
  numbers[i] = parseInt(prompt(`Enter ${i + 1} Number`));
}

// Code for numbers that are divisible by 3, but not by 2

for (let i = 0; i < length; i++) {
  if (numbers[i] % 2 == 0) continue;
  if (numbers[i] % 3 == 0) {
    org[j] = numbers[i];
    j++;
  }
}

document.write("Numbers that are divisible by 3, but not by 2 =>", ...org.join()); 
