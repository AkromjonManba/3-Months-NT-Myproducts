let btn = document.querySelector("#btn");
let menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("fa-times");
  menu.classList.toggle("active");
});

const accordion = document.querySelector(".faqs__accordionBx");

for (i = 0; i < accordion; i++) {
  accordion[i].addEventListener("click", function () {
    
  });
}
