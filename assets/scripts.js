window.onload = () => {
  const content = document.getElementById("exibir");
  const clear = () => (content.innerHTML = "");
  const erro = () => (content.innerHTML = "Error");
  const operadores = document.querySelectorAll("operator");

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
        content.style.fontSize = "inherit";
        content.style.overflowWrap = "normal";
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
      //retornar erro ao tentar porcentagem para floats incompletos
      if (
        conteudo.indexOf(".") + 1 == conteudo.indexOf("%") ||
        conteudo.indexOf(".") - 1 == conteudo.indexOf("%")
      ) {
        erro();
      }
      // se as validações estiverem ok, calcular o conteúdo innerHTML
      else {
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

  //
  //
  //
  //
  //
  //
  //
  // Porcentagem
  function percent() {
    const percentBtn = document.getElementById("percent-btn");

    //retornar porcentagem do valor informado
    operadores.forEach((operador) => {
      let conteudo = content.innerHTML;

      if (
        conteudo.includes(operador.innerHTML) &&
        conteudo.includes("%") &&
        conteudo.indexOf("%") == conteudo.length - 1
      ) {
        let valor = conteudo.substring(
          conteudo.indexOf("%"),
          conteudo.lastIndexOf(operador.innerHTML) + 1
        );
        let calcPercent = valor / 100;
        console.log(valor);
      }
    });
  }

  //
  //
  //
  //
  //
  //
  // function validacoes() {
  //   const conteudo = content.innerHTML;

  //   if (conteudo.indexOf("%") !== conteudo.length - 1) {
  //     erro();
  //   }

  //   operadores.forEach((operador) => {
  //     //retornar porcentagem do valor informado
  //     if (
  //       conteudo.includes(operador.innerHTML) &&
  //       conteudo.includes("%") &&
  //       conteudo.indexOf("%") == conteudo.length - 1
  //     ) {
  //       let valor = conteudo.substring(
  //         conteudo.indexOf("%"),
  //         conteudo.lastIndexOf(operador.innerHTML) + 1
  //       );
  //       let calcPercent = valor / 100;
  //     }
  //   });
};
