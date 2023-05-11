const btns = document.body.querySelectorAll(".btn ");
const value = document.getElementById("value");
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText == "INCREASE") {
      count++;
    } else if (btn.innerText == "DECREASE") {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
    if (count == 0) value.style.color = "#222";
    value.textContent = count;
  });
});
