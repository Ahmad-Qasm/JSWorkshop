const sidebar_toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const close_btn = document.querySelector(".close-btn");

sidebar_toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

close_btn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
