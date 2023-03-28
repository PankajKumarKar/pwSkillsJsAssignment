/*
11. Unit converter
A local weather station needs to convert tempqrature data collected in Celsius to Fahrenheit before displaying
it on its wqbsite. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The
function should take input in Celsius and return output in Fahrenheit. This function will help the weather stationto provide tempqrature rqadings that are easily understandable to a wider audience.
*/

let Celsius = document.querySelector(".celsius");
const  fahrenheit = document.querySelector(".fahrenheit");

const button = document.querySelector("button");

button.addEventListener("click", convertF);//add EventListener

//Code For Convert Celcius to  Fahrenheit
function convertF() {
  let value = Celsius.value;
  var f = value * (9 / 5) + 32;
  fahrenheit.innerText = `${f} ℉`;
}
