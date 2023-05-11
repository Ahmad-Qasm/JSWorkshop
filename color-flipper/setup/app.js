const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const clickme_btn = document.getElementById("btn");
const color = document.querySelector(".color");

function changeColor() {
  const random_color = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[random_color];
  color.textContent = colors[random_color];
}

clickme_btn.addEventListener("click", changeColor);
