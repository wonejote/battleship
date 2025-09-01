import { Ship } from "./ship.js";
export class GameBoard{

    constructor(){
        this.board = new Array(64);
        this.board.fill(0);
        this.lista = [];

    }
    addShip(hp,x,y,direction){
        if (direction == "vertical"){
            for (let i = 0; i < hp; i++){
                if (y + i >= 8 ){return false;} 
                if(this.board[8*(y + i) + x] !== 0  ){return false;}}
            for (let i = 0; i < hp; i++){
                this.board[(8*(y + i) + x)] = 1;}
            let newShip = new Ship(hp,x,y,"vertical");
            this.lista.push(newShip);
            return true;
        }
        if (direction == "horizontal"){
            for (let i = 0; i < hp; i++){
                if (x+i >= 8) {return false}
                if(this.board[8*(y) + x+i] !== 0){ return false;}
            }
            for (let i = 0; i < hp; i++){
                this.board[(8*y  + x+i)] = 1;}
            let newShip = new Ship(hp,x,y,"horizontal");
            this.lista.push(newShip);
            return true;
            
        }
        return false;
    }
    displayBoard(){
        for (let i = 0; i < this.board.length; i += 8) {
         console.log(this.board.slice(i, i + 8).join(" "));}}

    receiveAttack(x,y){
        let pos = (y*8 + x);
        if (this.board[pos] != 0){ return false;}
        for (let ship of this.lista){
            if (ship.positionSet.has(pos)){
                console.log("golpe");
                this.board[pos] = "V";
                ship.hit();
                this.gameOver();
                return true;
            }
        }
        this.board[pos] = "x";
        return true;

    }
    gameOver(){
        for(let ship of this.lista){
            if (ship.sunk == false){return;}
            console.log("juego terminado");
            return;
        }
    }
}
