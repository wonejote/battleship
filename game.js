import { GameBoard } from "./gameBoard.js";

class Player{
    constructor(){
        this.gameBoard = new GameBoard();
    }
}

export class Game{
    constructor(){
        this.jugador = new Player();
        this.enemy = new Player();
        this.turno = "jugador";
    }
    attack(x,y){
        if (this.turno === "jugador"){
            let hit = this.enemy.gameBoard.receiveAttack(x,y);
            if (hit){this.turno = "enemy";return;}
            }
        if (this.turno === "enemy"){
            let hit = this.jugador.gameBoard.receiveAttack(x,y);
            if (hit) {this.turno = "jugador"; return;}
            }
            return;
    }
    estado(){
        console.log("jugador");
        this.jugador.gameBoard.displayBoard();
        console.log("enemigo: ")
        this.enemy.gameBoard.displayBoard();
    }
}

