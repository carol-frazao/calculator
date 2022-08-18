window.onload = () => {
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
};
