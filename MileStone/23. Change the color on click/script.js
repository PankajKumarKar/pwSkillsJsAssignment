/*23. Change the color on click
Create a button that utilizes an array of colors and the Math.random method to change the background color
of the page upon clicking.
*/

//Code For Generate Random Color
const randomColor = () => {
  let val = "1234567890ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

//Apply Event On Button

const button = document.getElementById("bgChangeButton");
button.addEventListener("click", changeRandomColor);

//Code For Change Random Color of Background

function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}
