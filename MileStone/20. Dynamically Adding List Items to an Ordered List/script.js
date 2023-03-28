/*
20. Dynamically Adding List Items to an Ordered List
Visit page and look for “What you'll learn” section.
The section consists of a list of information on what you will be learning in the course. You are required to write
a JavaScript program that stores a pre-existing array of list items. On each button click, the program should
add a new list item in sequential order. The program should verify if any remaining items are available in the list
item array and add the next item to the list accordingly. If no items are left, the function should display a
message indicating that all items have been added.
*/
// pre-existing array of list items

const items = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];

// Code for add a new list item in sequential order

const list = document.getElementById("list");
const button = document.getElementById("add-btn");
let currentItemIndex = 0;

button.addEventListener("click", () => {
  if (currentItemIndex < items.length) {
    const newItem = document.createElement("li");
    newItem.textContent = "=>" + items[currentItemIndex];
    list.appendChild(newItem);
    currentItemIndex++;
  } else {
    alert("All items have been added.");
  }
});
