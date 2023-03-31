/*
2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
*/
let delay = 3;

const countInterval = setInterval(() => {
  if (delay === 0) {
    const randamNumber = Math.floor(Math.random() * 100) + 1; //Generate Number between 1 to 100
    console.log("Random Number :", randamNumber);
    clearInterval(countInterval);
  } else {
    console.log(
      `Remaining Time in seconds to generate Random Number...${delay}seconds`
    );
    delay--;
  }
}, 1000);
