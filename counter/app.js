const increase_btn = document.querySelector("btn increase");
const reset_btn = document.querySelector("btn reset");
const decrease_btn = document.querySelector("btn decrease");

increase_btn.addEventListener("click", function () {
  const i = 1;
  const value = document.querySelector("#value");
  value.textContent = i;
});
