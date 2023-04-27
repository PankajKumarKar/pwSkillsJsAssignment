/*
1. Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.
*/

const numbers = [1, 2, 3, 4, 5];

function double(arr, callback) {
  return callback(arr);
}

function newArray(arr) {
  return arr.map((num) => num * 2);
}

const result = double(numbers, newArray);

console.log(result);
