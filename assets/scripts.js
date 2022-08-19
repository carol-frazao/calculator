window.onload = () => {
  const content = document.getElementById("exibir");
  const clear = () => (content.innerHTML = "");

  // Desligar calculadora
  function powerOff() {
    const powerOff = document.getElementById("powerOff");

    powerOff.onclick = () => {
      content.style.display = "none";
      clear();
    };
  }
  powerOff();

  //Ligar calculadora ou limpar o conteúdo
  function powerOn_clear() {
    const powerOn = document.getElementById("on-c");

    powerOn.onclick = () => {
      content.style.display = "block";

      if (content.innerHTML) {
        clear();
      }
    };
  }
  powerOn_clear();

  //Exibir os números clicados
  function displayContent() {
    const buttons = document.querySelectorAll(".number, .operator");

    buttons.forEach((btn) => {
      btn.onclick = () => (content.innerHTML += btn.innerHTML);
    });
  }
  displayContent();

  // Apagar caractere
  function backspace() {
    const backspace = document.getElementById("backspace");

    backspace.onclick = () => {
      let conteudo = content.innerHTML;
      content.innerHTML = conteudo.substring(conteudo.length - 1, 0);
    };
  }
  backspace();

  // Calcular conteúdo
  function calc() {
    const resultado = document.getElementById("result-btn");

    resultado.onclick = () => {
      let conteudo = content.innerHTML;

      if (conteudo) {
        content.innerHTML = eval(conteudo);
      }
    };
  }
  calc();

  // Calcular raiz quadrada
  function squareRoot() {
    const sqrtBtn = document.getElementById("raizQuadrada");

    sqrtBtn.onclick = () => {
      let conteudo = content.innerHTML;

      if (conteudo) {
        content.innerHTML = Math.sqrt(conteudo);
      }
    };
  }
  squareRoot();
};
