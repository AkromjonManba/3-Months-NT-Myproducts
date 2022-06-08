let btn = document.querySelector("#btn");
let menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("fa-times");
  menu.classList.toggle("active");
});

const accordion = document.querySelectorAll(".faqs__accordionBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle('acactive')
  });   
}
