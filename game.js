import { GameBoard } from "./gameBoard.js";

class Player{
    constructor(){
        this.gameBoard = new GameBoard();
    }
}

class Game{
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

let game = new Game();

game.jugador.gameBoard.addShip(5,3,2,"horizontal");
game.jugador.gameBoard.addShip(4,4,1,"horizontal");
game.jugador.gameBoard.addShip(5,0,0,"vertical");
game.jugador.gameBoard.addShip(3,7,3,"vertical");

game.enemy.gameBoard.addShip(5,2,3,"horizontal");
game.enemy.gameBoard.addShip(4,1,7,"horizontal");
game.enemy.gameBoard.addShip(5,0,0,"vertical");
game.enemy.gameBoard.addShip(3,7,0,"vertical");

game.attack(0,0);
game.attack(2,4);
game.attack(2,4);
game.attack(2,4);
game.attack(2,0);
game.attack(1,4);
game.attack(3,4);
game.estado();
