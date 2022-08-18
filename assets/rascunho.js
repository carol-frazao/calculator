//recuperando as classes
const $ = (element) => document.querySelector(element);

const buttons = {
  powerOff: $(".powerOff"),
  powerOn: $(".powerOn"),
  ce: $("#btn_ce"),
  M_adicao: $("#M_adicao"),
  M_subtracao: $("#M_subtracao"),
  MRC: $("#MRC"),
  adicao: $("#btn_adicao"),
  subtracao: $("#btn_subtracao"),
  multiplicacao: $("#btn_multiplicacao"),
  divisao: $("#btn_divisao"),
  result: $("#btn_result"),
};

const displayNumbers = $("#exibir");
const clearDisplay = () => {
  displayNumbers.innerHTML = "";
  symbol.innerHTML = "";
};

function exibeNumeros() {
  const numbers = document.querySelectorAll(".number_btn");

  numbers.forEach((number) => {
    number.onclick = () => {
      if (displayNumbers.style.display == "block") {
        displayNumbers.innerHTML += number.innerText;
      }
    };
  });
}

function exibeOperador() {
  let operadores = document.querySelectorAll(".operator");

  operadores.forEach((operador) => {
    operador.onclick = () => {
      if (displayNumbers.style.display == "block") {
        displaySymbol(operador.innerText);
      }

      displayNumbers.style.opacity = "0";
      setTimeout(() => (displayNumbers.style.opacity = "1"), 50);
    };
  });
}

function displaySymbol(value) {
  const symbol = $("#symbol");

  symbol.style.display = "inline-block";
  symbol.innerHTML = value;
}

function eventos() {
  buttons.powerOn.onclick = () => {
    displayNumbers.style.display = "block";
    symbol.style.display = "block";
  };

  buttons.powerOff.onclick = () => {
    displayNumbers.style.display = "none";
    symbol.style.display = "none";
    clearDisplay();
  };

  buttons.ce.onclick = () => clearDisplay();

  exibeNumeros();
  exibeOperador();
}

eventos();
