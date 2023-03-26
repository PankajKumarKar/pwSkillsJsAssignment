/*
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.

const person = {
  name: "Pankaj",
  age: 26,
  address: {
    street: "Ranchi Road",
    city: "Ranchi",
    state: "Jharkhnad",
  },
};

*/

const person = {
  name: "Pankaj",
  age: 26,
  address: {
    street: "Ranchi Road",
    city: "Ranchi",
    state: "Jharkhnad",
  },
};

// Code For destructuring

function destruct({ name, address: { street } }) {
  return { name, street };
}

let { name, street } = destruct(person);

console.log(name);
console.log(street);
