/*
1. Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.
*/

const text = "I m Pankaj Kumar kar pankaj kumar Kar";

// Code For countWords

function countWords(text) {
  const words = text.toLowerCase().split(" ");

  const wordCount = new Map();

  for (const word of words) {
    const count = wordCount.get(word) || 0;
    wordCount.set(word, count + 1);
  }

  return wordCount;
}

const wordCount = countWords(text);

console.log(wordCount);
