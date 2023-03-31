/*
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/

const books = [
  { name: "abc1", author: "geroge", publicationyear: 2009 },
  { name: "bcd", author: "ramesh", publicationyear: 2016 },
  { name: "vxy", author: "ranjit", publicationyear: 2012 },
  { name: "nmo", author: "simran", publicationyear: 2008 },
  { name: "nyz", author: "aaliya", publicationyear: 2011 },
  { name: "jxt", author: "puja", publicationyear: 2005 },
];

//Code For Filter 

const filteredBooks = books
  .filter((el) => el.publicationyear > 2010)
  .map((book) => ({
    nam: book.name,
    author: book.author.toUpperCase(),
    publicationyear: book.publicationyear,
  }));

console.log(filteredBooks);
