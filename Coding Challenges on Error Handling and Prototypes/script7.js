/*
7. Multiple requests.
Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.
*/

async function fetchData() {
  const data1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const todo = await data1.json();
  const post = await data2.json();

  result = { todo: todo, post: post };
  console.log(result);
}

fetchData();
