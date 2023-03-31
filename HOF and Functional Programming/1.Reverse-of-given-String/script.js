let input; // Variable to Store String

const string = document.querySelector("input"); //select input tag

const revString = document.querySelector("#show-value"); //select by id to display reverse string

// code to convert Reverse of Given String

function reverseString() {
  if (string.value == "") return;
  input = string.value;

  let revStr = [...input].reverse().join(""); // reverse code

  revString.innerText = "Loading....";

  // set Time out For Clear Display reverse String
  setTimeout(() => {
    revString.innerText = `Reverse String is:${revStr}`;
    string.value = "";
  }, 2000);
}
