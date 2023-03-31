/*
3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
*/

const store = {
  apple: 1,
  banana: 10,
  orange: 2,
  mango: 4,
};

//1 USD to 80 INR

const converTpriceINRS = Object.entries(store).map(([item, price]) => {
  const priceInRupees = price * 80;
  return { item, priceInRupees };
});

console.log(converTpriceINRS);
