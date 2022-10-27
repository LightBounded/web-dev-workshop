let todoTextInput = document.getElementById("todo-text-input");
let todosList = document.getElementById("todos-list");
let addTodoBtn = document.getElementById("add-todo-btn");

addTodoBtn.addEventListener("click", () => {
  let todoText = todoTextInput.value;

  let todoListItem = document.createElement("li");

  todoListItem.innerText = todoText; // add todo text into our todo list item

  let delTodoBtn = document.createElement("button"); // create delete button to append to our list item
  delTodoBtn.innerText = "Delete";
  delTodoBtn.style.marginLeft = "10px"; // add spaces between the input and the delete button

  todoListItem.appendChild(delTodoBtn); // add delete button as a child to our todo list item

  todosList.appendChild(todoListItem); // add the entire todo list item to our unordered list in our HTML

  // remove list item when delete button is clicked
  delTodoBtn.addEventListener("click", () => {
    todosList.removeChild(todoListItem);
  });

  todoTextInput.value = ""; // clear input text
});
