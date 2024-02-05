let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
};

let menu = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  menu.classList.toggle("active");
};

//Header
let Header = document.querySelector("header");

window.addEventListener("scroll", () => {
  Header.classList.toggle("shadow", window.scrollY > e);
});
