let count = 1;
function showList() {
  for (let i = 0; i < 25; i++) {
    let name = document.createElement("h3");
    name.innerText = `Masai Student ${count++}`;
    name.setAttribute("class", "list");

    document.querySelector(".content_scroll").append(name);
  }
}

showList();

let container = document.querySelector(".content_scroll");

container.onscroll = () => {
  const scrollY = container.scrollHeight - container.scrollTop;
  const height = container.offsetHeight;
  const offset = height - scrollY;

//   console.log(offset);

  if (offset >= 20) {
    showList();
  }
};
