/*
2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.
*/

const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 8, 8, 12, 11, 11,1,3,7,4,5];


// Code For Find Unique Set

function findUniqueElements(arr) {
  let uniqueSet = new Set(arr);
  return uniqueSet;
}

const result = findUniqueElements(numbers);

console.log(result);
