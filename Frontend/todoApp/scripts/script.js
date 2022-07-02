function Todo() {
  var todo = document.querySelector(".form-data").value;
  console.log(todo);
  
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", Todo, false);
