document.addEventListener("DOMContentLoaded", function () {
  const darkButton = document.getElementById("dark");
  const lightButton = document.getElementById("light");
  const funButton = document.getElementById("fun");

  function changeBackgroundColor(color) {
    document.querySelectorAll("*").forEach(function (element) {
      element.style.backgroundColor = color;
    });
  }

  darkButton.addEventListener("click", function () {
    changeBackgroundColor("black");
  });

  lightButton.addEventListener("click", function () {
    changeBackgroundColor("white");
  });

  funButton.addEventListener("click", function () {
    changeBackgroundColor("pink");
  });
});
