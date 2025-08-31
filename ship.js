
export class Ship{
    constructor(hp, x,y, direction){
        this.hp = hp;
        this.positionX = x;
        this.positionY = y;
        this.direction = direction;
    }

    hit(){
        this.hp --;
    }
    isSunk(){
        if (this.hp <= 0){return true;}
        return false;
    }
}