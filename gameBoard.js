import { Ship } from "./ship.js";
class GameBoard{

    constructor(){
        this.board = new Array(64);
        this.board.fill(0);
        this.lista = [];

    }
    addShip(hp,x,y,direction){
        if (direction == "vertical"){
            for (let i = 0; i < hp; i++){
                if (y + i >= 8 ){return;} 
                if(this.board[8*(y + i) + x] !== 0  ){return;}}
            for (let i = 0; i < hp; i++){
                this.board[(8*(y + i) + x)] = 1;}
            let newShip = new Ship(hp,x,y,"vertical");
            this.lista.push(newShip);
        }
        if (direction == "horizontal"){
            for (let i = 0; i < hp; i++){
                if (x+i >= 8) {return}
                if(this.board[8*(y) + x+i] !== 0){ return;}
            }
            for (let i = 0; i < hp; i++){
                this.board[(8*y  + x+i)] = 1;}
            let newShip = new Ship(hp,x,y,"horizontal");
            this.lista.push(newShip);
            
        }
    }
    displayBoard(){
        for (let i = 0; i < this.board.length; i += 8) {
         console.log(this.board.slice(i, i + 8).join(" "));}}

    receiveAttack(x,y){
        let pos = (y*8 + x);
        for (let ship of this.lista){
            if (ship.positionSet.has(pos)){
                console.log("golpe");
                this.board[pos] = "V";
                 ship.hit();
                ship.isSunk();
                return;
            }
        }
        this.board[pos] = "x";
        

    }
}

let tablero = new GameBoard;
tablero.addShip(4,5,2,"vertical");
tablero.addShip(3,2,2,"horizontal");

tablero.receiveAttack(4,2);
tablero.receiveAttack(5,2);
tablero.receiveAttack(2,2);
tablero.receiveAttack(3,2);
tablero.displayBoard();