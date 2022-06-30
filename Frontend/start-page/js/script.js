// weather API
const url = "https://api.chucknorris.io/jokes/random";
async function joke() {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let joke = data.value;
      //   console.log(joke);
      return joke;
    })
    .then((joke) => {
      document.querySelector(".temp").innerHTML = joke;
    });
}
joke();
