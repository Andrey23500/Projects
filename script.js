document.onload = function () {

  const board = document.querySelector("#board");
  const colors = [
    "red",
    "yelow",
    "pink",
    "green",
    "blue",
    "#4682B4",
    "#D2691E",
    "#800000",
  ];
  const SQUARES_NUMBER = 600;

  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));
    board.append(square);
  }

  function setColor(elem) {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }
  function removeColor(elem) {
    elem.style.backgroundColor = "#1d1d1d";
    elem.style.boxShadow = "0 0 2px #000";
  }
  function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
}();