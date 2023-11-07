let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./assets/images/light.svg";
  } else {
    this.firstElementChild.src = "./assets/images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

// let modeBtn = document.getElementById("mode-btn");

// modeBtn.addEventListener("click", function () {
//   if (document.body.className != "light") {
//     this.firstElementChild.src = "../images/dark.svg";
//   } else {
//     this.firstElementChild.src = "../images/light.svg";
//   }
//   document.body.classList.toggle("light");
// });