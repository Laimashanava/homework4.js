document.getElementById("textBtn").addEventListener("click", function () {
  document.getElementById("textElement").textContent =
    "JavaScript Fundamentals";
});

document.getElementById("modeBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
});

document.getElementById("hideBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.toggle("hidden");
});
