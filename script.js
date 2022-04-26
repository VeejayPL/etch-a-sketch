const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridButton");
let square;

gridButton.addEventListener("click", () => {
  document.location.reload();
});

function drawGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    square = container.appendChild(document.createElement("div"));
    square.classList.add("box");
    square.addEventListener("mouseover", (e) =>
      e.target.classList.add("box-hover")
    );
  }
}

drawGrid(16);
