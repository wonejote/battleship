import { GameBoard } from "./gameBoard.js";

export class FormInicial{
    constructor(){
        this.tablero = new GameBoard();
        this.hp = 0;
        this.direccion = "horizontal";
        this.x = 0;
        this.y = 0;
    }

    setX(index){
        this.x = index%8;
        return this.x;
    }
    setY(index){
        this.y = Math.floor(index/8);
        return this.y;
    }
    setDireccion(){
        this.direccion == "horizontal" ? this.direccion = "vertical" : this.direccion = "horizontal";
        return this.direccion;
    }
    setHp(hp){
        this.hp = hp;
        return this.hp
    }

    addPosicion(){
        let newShip = this.tablero.addShip(this.hp,this.x,this.y,this.direccion);
        if (newShip){return true;}
        return false;
    }
    getList()
    {
        console.log(this.tablero.lista);
    }

}

