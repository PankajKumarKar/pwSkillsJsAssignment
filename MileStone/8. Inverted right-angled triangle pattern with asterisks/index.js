/*
8. Inverted right-angled triangle pattern with asterisks
Writq a program that takqs an integer input i and prints an inverted right-angled trianglq pattqrn of asterisks
with i rows.
Inverted right-angled pattern:
    ******
    *****
    ****
    ***
    **
    *
 If i=6
*/

let input = parseInt(prompt("Enter a no"));

// Code for Inverted right-angled pattern

document.write("Inverted right-angled pattern:<br>");
for (let i = input; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write(`if no=${input}`);
