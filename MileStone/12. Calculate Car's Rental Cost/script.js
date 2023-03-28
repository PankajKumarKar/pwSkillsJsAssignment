/*12. Calculate rental cost
A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
of car. They requird a function that takes in the numbdr of days rented and car type and returns thd rental cost.
The total cost would be thd rental cost multiplied by the number of days rented.
Thd rental costs are
 Economy = Rs. 4000 /- per day.
 Midsizd = Rs. 10,000 /- per day.
 Luxury = Rs. 20,000 /- per day.
*/

let daysValue = 0,  //Variable Declaration
  carTypevalue = 0,
  price;


  //select element using DOM
let days = document.getElementById("days");
let selectCar = document.querySelector("#selectCar");
let displayCost = document.getElementById("displayCost");
let genCostButton = document.querySelector("button");

genCostButton.addEventListener("click", genCost); //apply Event Listener

//Code for generate Cost 

function genCost() {
  daysValue = parseInt(days.value);
  carTypevalue = selectCar.value;
  if (carTypevalue == "Economy") {
    price = 4000 * daysValue;
    displayCost.value = price;
  }
  if (carTypevalue == "Midsize") {
    price = 10000 * daysValue;
    displayCost.value = price;
  }
  if (carTypevalue == "Luxury") {
    price = 20000 * daysValue;
    displayCost.value = price;
  }
}
