var items = ["dal", "rice", "oil", "ghee", "milk", "harry"];

function generateList() {
  const ul = document.querySelector(".list-items");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("item");
    const name = document.createTextNode(item);
    li.appendChild(name);
    ul.appendChild(li)
  });
}

generateList();
