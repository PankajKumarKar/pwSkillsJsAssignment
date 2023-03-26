/*
You are working on a project that requires you to swap the values of two variables without using a temporary
variable. You decide to write a function that takes two variables as input and swaps their values using
destructuring assignment with an array. The function should take the two variables as arguments, destructure
them into an array, and then swap their positions within the array. Finally, the function should return an array
with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
return an array [10, 5] with x now equal to 10 and y equal to 5.
*/

let x = 5;
let y = 10;

//Code for swap the values of two variables.
function swapOperation(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

[x, y] = swapOperation(x, y);

console.log(`Value of x:${x} and y:${y} `);
