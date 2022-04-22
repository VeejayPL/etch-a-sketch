const container = document.querySelector("#container");

function drawGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = container.appendChild(document.createElement("div"));
    square.classList.add("box");
  }
}

drawGrid(16);
