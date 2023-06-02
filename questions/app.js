//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");
console.log(questions);

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) item.classList.remove("show-text");
    });
    question.classList.toggle("show-text");
  });
});
