/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio];
  }

  let pinta = ["♦", "♥", "♠", "♣"];
  let valor = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let elementPintaCartaArriba = document.querySelector("#pintaCartaArriba");
  let elementCalorCarta = document.querySelector("#valorCarta");
  let elementPintaCartaAbajo = document.querySelector("#pintaCartaAbajo");
  elementPintaCartaAbajo.style.transform = "rotate(180deg)";

  const renderNewRandomCard = () => {
    let pintaCartaArriba = aleatorio(pinta);
    let valorCarta = aleatorio(valor);

    elementPintaCartaArriba.innerHTML = pintaCartaArriba;
    elementCalorCarta.innerHTML = valorCarta;
    elementPintaCartaAbajo.innerHTML = pintaCartaArriba;

    if (pintaCartaArriba == "♥" || pintaCartaAbajo == "♦") {
      elementPintaCartaArriba.style.color = "red";
      elementPintaCartaAbajo.style.color = "red";
    } else {
      elementPintaCartaArriba.style.color = "black";
      elementPintaCartaAbajo.style.color = "black";
    }
  };

  renderNewRandomCard();

  let botonGenerador = document.querySelector("#botonGenerador");

  botonGenerador.addEventListener("click", renderNewRandomCard);

  //Generador automático

  setInterval(renderNewRandomCard, 10000);

  renderNewRandomCard();
};
