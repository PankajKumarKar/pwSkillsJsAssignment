/*
13. Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group.
*/
const dishCost=[20,10,30,40,12];
let numbersOfPersons=3;


// Code for splitBill
function splitBill(dishCost,numbersOfPersons){
    const totalBill=dishCost.reduce((acc,curr)=>acc+curr,0);
    const billPerPerson=totalBill/numbersOfPersons;

    return {totalBill,billPerPerson}
}

const bill=splitBill(dishCost,numbersOfPersons);
console.log(`Total bill : ${bill.totalBill} , Bill to be paid by each person : ${bill.billPerPerson}`)