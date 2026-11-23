const board = document.querySelector(".board");
let boardSize = 16;
const button = document.querySelector(".new-board");

for (i = 0; i < (boardSize * boardSize); i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = `${640 / boardSize}px`;
    grid.style.height = `${640 / boardSize}px`;
    board.appendChild(grid);
    grid.addEventListener("mouseenter", () => {
        grid.classList.add("colored");
    })
}

button.addEventListener("click", () => {
    let grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.classList.remove("colored");
    })
})