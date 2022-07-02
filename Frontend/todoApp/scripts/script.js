function Todo() {
  var todo = document.querySelector(".form-data").value;
  console.log(todo);
  const li = document.createElement("li");
  li.innerText = todo;
  document.querySelector(".todo-items").appendChild(li);
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", Todo, false);
