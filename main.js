import { FormInicial } from "./form.js";

const form = new FormInicial();

//----------------------------------------------
const body = document.querySelector("body");
const board = document.createElement("div");
const spanHp = document.querySelector(".hp");
const spanX = document.querySelector(".x");
const spanY = document.querySelector(".y");
board.classList.add("board");

for (let i = 0; i <64; i++){
    let casilla = document.createElement("div");
    casilla.classList.add(i);
    casilla.classList.add("casilla");
    casilla.dataset.index = i; 
    casilla.innerText = i;
    board.appendChild(casilla);
    
}
body.appendChild(board);

//-----------------------------------------------
const btnDireccion = document.createElement("button");
btnDireccion.innerText = "horizontal";
body.appendChild(btnDireccion);
btnDireccion.addEventListener("click", ()=>{
form.setDireccion();
btnDireccion.innerText = form.direccion;
})

//----------------------------------------------
const barco1 = document.createElement("div");
barco1.dataset.hp = 5;
barco1.classList.add("barco");
barco1.classList.add("barco1");

const barco2 = document.createElement("div");
barco2.dataset.hp = 4;
barco2.classList.add("barco");
barco2.classList.add("barco2");

const barco3 = document.createElement("div");
barco3.dataset.hp = 3;
barco3.classList.add("barco");
barco3.classList.add("barco3");

const barco4 = document.createElement("div");
barco4.dataset.hp = 3;
barco4.classList.add("barco");
barco4.classList.add("barco4");

const barco5 = document.createElement("div");
barco5.dataset.hp = 2;
barco5.classList.add("barco");
barco5.classList.add("barco5");

//------------------------------
body.appendChild(barco1);
body.appendChild(barco2);
body.appendChild(barco3);
body.appendChild(barco4);
body.appendChild(barco5);

const barcos = document.querySelectorAll(".barco");

barcos.forEach(barco => {
barco.addEventListener("click",()=>{
    form.setHp(barco.dataset.hp);
    spanHp.innerText = "hp: " + form.hp;
})

})



//_--------------------------------------------
const casillas = document.querySelectorAll(".casilla");

casillas.forEach(casilla => {
  casilla.addEventListener("click", () => {
    form.setX(casilla.dataset.index);
    form.setY(casilla.dataset.index);
    form.addPosicion();
    spanX.innerText = "x: " + form.x;
    spanY.innerText = "y: " + form.y;
  });

  casilla.addEventListener("mouseenter", () => {
    iluminar(Number(casilla.dataset.index), form.hp, form.direccion);
  });

  casilla.addEventListener("mouseleave", () => {
    casillas.forEach(c => c.style.backgroundColor = "aqua"); // resetear colores
  });
});

function iluminar(index, hp, direccion) {
  if (direccion === "horizontal") {
    let y = Math.floor(index / 8);
    let x = index % 8;

    for (let i = 0; i < hp; i++) {
      if (x + i < 8) { // no pasar de la fila
        casillas[8*y + (x+i)].style.backgroundColor = "green";
      }
    }
  }

  if (direccion === "vertical") {
  let y = Math.floor(index / 8);
  let x = index % 8;

  for (let i = 0; i < hp; i++) {
    if (y + i < 8) { // no pasar de la última fila
      casillas[8 * (y + i) + x].style.backgroundColor = "green";
    }
  }
}

}
//---------------------