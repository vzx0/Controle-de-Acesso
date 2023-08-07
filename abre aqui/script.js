function verificar() {
    const numeroCartaoInput = document.getElementById("numeroCartao");
    const resultadoElement = document.getElementById("resultado");
    const containerElement = document.getElementById("texto");
  
    const numeroCartao = parseInt(numeroCartaoInput.value);
  
    // if (numeroCartao >= 1000 && numeroCartao <= 1999) {
    //   resultadoElement.textContent = "Acesso Liberado (Total)";
    //   containerElement.className = "container access-granted-total";
    // } 

    if (numeroCartao <= 1000) {
        resultadoElement.textContent = "Acesso Negado";
        containerElement.className = "container access-denied";
    }

    else if (numeroCartao >= 2000 && numeroCartao <= 2999) {
      resultadoElement.textContent = "Acesso Liberado (Limitado)";
      containerElement.className = "container access-granted-limited";
    } 

    else if (numeroCartao >= 1000 && numeroCartao <= 1999) {
        resultadoElement.textContent = "Acesso Liberado (Total)";
        containerElement.className = "container access-granted-total";
      } 
    
    else if (numeroCartao > 3000) {
      resultadoElement.textContent = "Acesso negado";
      containerElement.className = "container access-denied";
    } 
    
    else { 
      resultadoElement.textContent = "Nº do cartão inválido!";
      containerElement.className = "container access-denied ";
    }
  }