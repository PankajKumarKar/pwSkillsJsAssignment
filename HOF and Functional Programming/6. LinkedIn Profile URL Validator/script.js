/*
6. LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.
*/

const linkedinUrlRegex =
  /^https:\/\/www.linkedin.com\/in\/[a-z0-9_-]{5,30}[a-z0-9]$/i;

const url1 = "https://www.linkedin.com/in/pankajkar";
const url2 = "https://www.linkedin.com/in/jane-doe/";
const url3 = "https://www.linkedin.com/in/john_doe-123";
const url4 = "https://www.linkedin.com/in/john.doe";
const url5 = "https://www.linkedin.com/in/johndoe";
const url6 = "https://www.linkedin.com/in/john_doe123_456";

//Code for   Check url Validation

if (url1.match(linkedinUrlRegex)) {
  console.log(`${url1} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url1} is not a valid LinkedIn profile URL`);
}

if (url2.match(linkedinUrlRegex)) {
  console.log(`${url2} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url2} is not a valid LinkedIn profile URL`);
}

if (url3.match(linkedinUrlRegex)) {
  console.log(`${url3} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url3} is not a valid LinkedIn profile URL`);
}

if (url4.match(linkedinUrlRegex)) {
  console.log(`${url4} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url4} is not a valid LinkedIn profile URL`);
}

if (url5.match(linkedinUrlRegex)) {
  console.log(`${url5} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url5} is not a valid LinkedIn profile URL`);
}

if (url6.match(linkedinUrlRegex)) {
  console.log(`${url6} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url6} is not a valid LinkedIn profile URL`);
}
