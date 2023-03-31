let val=0;//Textbox Intial Value
const textbox=document.querySelector("input");
textbox.value=val;


const reset=document.getElementById("reset");
reset.addEventListener("click",Reset);

//Increment function
function inCrement(){
   textbox.value=++val;
}

//Decrement function

function deCrement(){
    textbox.value=--val;
}

//Reset function
function Reset(){
    val=0;
    textbox.value=val;
}
