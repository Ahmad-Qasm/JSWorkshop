const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

btns.forEach((activeBtn) => {
  activeBtn.addEventListener("click", () => {
    btns.forEach((btn) => {
      if (activeBtn.dataset.id !== btn.dataset.id)
        btn.classList.remove("active");
      else activeBtn.classList.add("active");
    });

    content.forEach((content) => {
      content.classList.remove("active");
    });

    const activeContetn = document.getElementById(`${activeBtn.dataset.id}`);
    activeContetn.classList.add("active");
  });
});
