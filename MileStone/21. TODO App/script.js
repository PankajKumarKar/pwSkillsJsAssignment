const input = document.querySelector("input");
const button = document.querySelector("button");
let todoList = document.getElementById("todoList");

button.addEventListener("click", addTask);

//Code To Add Task
function addTask() {
  const todoText = input.value;
  if (todoText) {
    const todoItem = document.createElement("li");
    todoItem.innerText = todoText;
    todoList.appendChild(todoItem);
    input.value = "";
  }
}
