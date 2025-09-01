
export class Ship{
    constructor(hp, x,y, direction){
        this.hp = hp;
        this.direction = direction;
        this.positionSet =  new Set();
        this.sunk = false;

        if (this.direction == "vertical"){
            for (let i = 0; i < this.hp; i++){
                this.positionSet.add(8*(y + i) + x);
            }
        }
        if (this.direction == "horizontal"){
            for (let i = 0; i < this.hp; i++){
                this.positionSet.add(y*8 + i + x);
            }
        }
    }

    hit(){
        this.hp --;
        this.isSunk();
    }
    isSunk(){
        if (this.hp <= 0){
            console.log("me hundieron")
            this.sunk = true;
            return;}
        return false;
    }
}