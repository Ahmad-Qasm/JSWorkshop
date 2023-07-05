const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slide");
let counte = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
nextBtn.addEventListener("click", () => {
  counte++;
  carousel();
});
prevBtn.addEventListener("click", () => {
  counte--;
  carousel();
});

function carousel() {
  if (counte < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counte > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counte * 100}%)`;
  });
}

prevBtn.style.display = "none";
