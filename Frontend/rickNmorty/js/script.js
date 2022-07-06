const options = { method: "GET" };
var i = 1;
var url = "https://rickandmortyapi.com/api/episode";

function load(url) {
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      return response.results;
    })
    .then((data) => {
      data.forEach((result) => {
        let sNo = i;
        let tableRow = `<td>${sNo}</td>
      <td>${result.name}</td>
      <td>${result.air_date}</td>
      <td>${result.episode}</td>
      <td>${result.characters}</td>
      <td>${result.url}</td>`;
        let elem = document.createElement("tr");
        elem.innerHTML = tableRow;
        document.querySelector("tbody").appendChild(elem);
        i += 1;
      });
    })
    .catch((err) => console.error(err));
}

load(url);
