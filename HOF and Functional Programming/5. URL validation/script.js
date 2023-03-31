/*
5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/

const urlRegex =
  /^(http|https):\/\/[\w\-+]+(\.[\w\-+]+)+([\w.,@?^=%&:/~+#]*[\w@?^=%&/~+#])?$/;

const url = "https://example.com";

//Code for check valid url

if (url.match(urlRegex)) {
  console.log(`${url} is a valid URL`);
} else {
  console.log(`${url} is not a valid URL`);
}
