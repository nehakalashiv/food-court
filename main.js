let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  orderCart.classList.remove("active");
  loginForm.classList.remove("active");
  menuBtn.classList.remove("active");
};
let loginForm = document.querySelector(".login-form");

document.querySelector("#user").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  orderCart.classList.remove("active");
  menuBtn.classList.remove("active");
};
let orderCart = document.querySelector(".order-cart");

document.querySelector("#cart").onclick = () => {
  orderCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  menuBtn.classList.remove("active");
};
let menuBtn = document.querySelector(".links");

document.querySelector("#menu-btn").onclick = () => {
  menuBtn.classList.toggle("active");
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
  orderCart.classList.remove("active");
};

let crossbtn = document.querySelector(".links");

document.querySelector("#cross").onclick = () => {
  crossbtn.classList.remove("active");
};

window.onscroll = () => {
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
  orderCart.classList.remove("active");
  menuBtn.classList.remove("active");
};
