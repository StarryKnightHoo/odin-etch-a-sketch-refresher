const board = document.querySelector(".board");
let boardSize = 16;


for (i = 0; i < (boardSize * boardSize); i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = `${640 / boardSize}px`;
    grid.style.height = `${640 / boardSize}px`;
    board.appendChild(grid);
}