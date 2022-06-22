var formInput = document.querySelector("#tel");
var para = document.querySelector(".result");

formInput.onkeyup = Update;

function Update() {
  var x = document.querySelector("#tel");
  para.innerHTML = x.value;
}