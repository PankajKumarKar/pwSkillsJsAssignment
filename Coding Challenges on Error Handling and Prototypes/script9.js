/*
9. Error Handling
Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an error message on the webpage.
*/
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/123456789';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // do something with the data
    console.log(data);
  })
  .catch(error => {
    // handle the error
    console.error('There was a problem with the fetch operation:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred while fetching data from the API.';
    document.body.appendChild(errorMessage);
  });
