/*
10. Filter by Category.
Write a function that takes an array of products and returns a function that filters the array by a given product
category. The function must filter an eCommerce products array by a specific category. The closure filters
products using the filter() method. Finally, it returns a new array containing only the products with the same
category as the input.
*/

//Array Of Products

let products = [
  { name: "Pants", category: "Clothing" },
  { name: "Shorts", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "HeadFone", category: "Accessories" },
  { name: "Earphone", category: "Accessories" },
];

//Function Return Product By Category
function filterByCategory(products) {
  return function (category) {
    return products.filter((product) => product.category === category);
  };
}

let colthingProduct = filterByCategory(products)("Clothing");

console.log(colthingProduct);
