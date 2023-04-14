/*

04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting.

*/

{
  console.log(x); // undefined due to Hoisting
  //console.log(y);  //remove Comment an Run throw Error RefrenceError
  //console.log(z);    //remove Comment an Run throw Error RefrenceError


  var x="Value Of X";
  let y="Value Of Y";
  const z="Value Of z";


  console.log(x);// Value Of X
  console.log(y);// Value Of y
  console.log(z);// Value Of z
}