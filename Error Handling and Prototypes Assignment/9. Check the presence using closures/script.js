/*
9. Check the presence using closures.
Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise.
*/

const arr = [1, 2, 3, 4, 5];

//Function returns another function

function numberChecker(arr) {
  return function (num) {
    return arr.includes(num);
  };
}

const checkNum = numberChecker(arr);

console.log(checkNum(3));
console.log(checkNum(8));
