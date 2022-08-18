window.onload = () => {
  const powerOnBtn = document.getElementById("on-c");
  const powerOffBtn = document.getElementById("powerOff");
  const buttons = document.querySelectorAll(".number, .operator");
  const backBtn = document.getElementById("backspace");
  const content = document.getElementById("exibir");
  const result = document.getElementById("result");
  const clear = () => (content.innerHTML = "");

  // Desligar calculadora
  function powerOff() {
    powerOffBtn.onclick = () => {
      content.style.display = "none";
      clear();
    };
  }
  powerOff();

  //Ligar calculadora ou limpar o conteúdo
  function powerOn_clear() {
    powerOnBtn.onclick = () => {
      content.style.display = "block";

      if (content.innerHTML) {
        clear();
      }
    };
  }
  powerOn_clear();

  //Exibir os números clicados
  function displayContent() {
    buttons.forEach((btn) => {
      btn.onclick = () => (content.innerHTML += btn.innerHTML);
    });
  }
  displayContent();

  // Apagar caractere
  function backspace() {
    backBtn.onclick = () => {
      let conteudo = content.innerHTML;
      content.innerHTML = conteudo.substring(conteudo.length - 1, 0);
    };
  }
  backspace();

  //Calcular
  function calcular() {
    result.onclick = () => {
      let conteudo = content.innerHTML;
      parseInt(content.innerHTML);
      if (conteudo) {
        content.innerHTML = eval(conteudo);
      }
    };
  }
  calcular();
};
