/*
5} Capitalize
You are building a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changes.
*/

let inputValue = document.querySelector("#inputValue");
let capValue = document.querySelector("#capValue");

let stringValue;

//Event Apply

inputValue.addEventListener("input", capitalizeFirstLetter);

// Code For Captalize First Character of a given String

function capitalizeFirstLetter() {
  stringValue = inputValue.value;

  capitalString =
    stringValue.charAt(0) === stringValue.charAt(0).toUpperCase()
      ? stringValue
      : stringValue.charAt(0).toUpperCase() + stringValue.slice(1);

  capValue.innerText = capitalString;
}
