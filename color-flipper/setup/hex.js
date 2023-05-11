const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const clickme_btn = document.getElementById("btn");
const color = document.querySelector(".color");

clickme_btn.addEventListener("click", changeColor);

function changeColor() {
  let hex_color = "#";

  for (let i = 0; i < 6; i++) {
    const random_index = Math.floor(Math.random() * hex.length);
    hex_color += hex[random_index];
  }
  color.innerHTML = hex_color;
  document.body.style.background = hex_color;
  console.log(hex_color);
}
