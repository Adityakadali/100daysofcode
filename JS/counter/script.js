var counter = document.querySelector(".count");
var count = 0;
setInterval(() => {
  for (let i = 0; i < 1; i++) {
    count++;
    counter.innerHTML = count
  }
}, 1000);
