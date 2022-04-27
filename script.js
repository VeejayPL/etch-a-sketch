const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridButton");
const range = document.querySelector("#gridSize");
const para = document.querySelector("#para");

// Append range value to display
// Live grid size change
range.addEventListener("input", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
  drawGrid(range.value);
  para.textContent = `Grid size: ${range.value} x ${range.value}`;
});
// Reset button with default drawGrid
gridButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
  drawGrid(range.value);
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

drawGrid(range.value);
