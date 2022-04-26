const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridButton");
let square;

// Reset button with default drawGrid
gridButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
  drawGrid(16);
});

// Draw the grid
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
