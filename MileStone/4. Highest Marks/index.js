/*
4} Highest Marks
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.
*/

let Marks = [];
let highestMark = 0;

//Input Marks Of Five Student
for (let i = 0; i < 5; i++) {
  Marks[i] = prompt(`Enter ${i + 1} Student Marks`);
}

//Display Marks Of Five Student
Marks.forEach((el, index) => {
  console.log(`Marks Of Student ${index + 1} is=${el}`);
});

// Code For Check Highest Marks

for (let index = 0; index < Marks.length; index++) {
  highestMark = Marks[index] > highestMark ? Marks[index] : highestMark;
}

document.write("Highest Marks Is ", highestMark);
