let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "./assets/images/dark.svg";
  } else {
    this.firstElementChild.src = "./assets/images/light.svg";
  }
  document.body.classList.toggle("light");
});