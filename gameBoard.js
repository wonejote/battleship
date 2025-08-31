import { Ship } from "./ship.js";
class GameBoard{

    constructor(){
        this.board = new Array(64);
        this.board.fill(0);

    }
    addShip(hp,x,y,direction){
        if (direction == "vertical"){
            for (let i = 0; i < hp; i++){
                if (y + i >= 8 ){return;} 
                if(this.board[8*(y + i) + x] !== 0  ){return;}}
            for (let i = 0; i < hp; i++){
                this.board[(8*(y + i) + x)] = 1;}
            let newShip = new Ship(hp,x,y,"vertical")
        }
        if (direction == "horizontal"){
            for (let i = 0; i < hp; i++){
                if (x+i >= 8) {return}
                if(this.board[8*(y) + x+i] !== 0){ return;}
            }
            for (let i = 0; i < hp; i++){
                this.board[(8*y  + x+i)] = 1;}
            let newShip = new Ship(hp,x,y,"horizontal");
            
        }
    }
    displayBoard(){
        for (let i = 0; i < this.board.length; i += 8) {
    console.log(this.board.slice(i, i + 8).join(" "));
}
    }

}

let tablero = new GameBoard;
tablero.addShip(4,5,2,"vertical");
tablero.addShip(3,2,2,"horizontal");
tablero.displayBoard();