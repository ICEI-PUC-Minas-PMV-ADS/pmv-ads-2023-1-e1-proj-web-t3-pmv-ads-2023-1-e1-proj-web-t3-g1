function verificarQuantidadeCaracteres() {
    var senhaInput = document.getElementById("senha");
    var mensagem = document.getElementById("mensagem-caracteres");
    
    if (senhaInput.value.length < 8) {
      mensagem.innerText = "Máximo de 8 caracteres.";
    } else {
      mensagem.innerText = "";
    }
  }