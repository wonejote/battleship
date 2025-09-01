const body = document.querySelector("body");
const board = document.createElement("div");
board.classList.add("board");

for (let i = 0; i <64; i++){
    let casilla = document.createElement("div");
    casilla.classList.add(i);
    casilla.classList.add("casilla");
    casilla.innerText = "x: "+ Math.floor(i/8) + " y: " + i%8;
    board.appendChild(casilla);
    body.appendChild(board);
}

