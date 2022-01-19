/* Funções da página de escolha dos personagens */

function escolha(personagem) {
  var personagem = prompt("Informe o nome do personagem: Lara, Alice ou Leonard ? ");
  if (personagem == "Lara") {
    return (location = "pagina_lara.html");
  } else if (personagem == "Alice") {
    return (location = "pagina_alice.html");
  } else if (personagem == "Leonard") {
    return (location = "pagina_leo.html");   
  } else {
    alert("Resposta incorreta!  Favor responda Lara, Alice ou Leonard!");
    escolha();
  }
}

/* Funções da fase 01 */
function escolha_fase_alice(fase) {
   var fase = prompt("1 - Ficar e enfrentar o morto vivo ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "alice_fase2.html");
  } else if (fase == "2") {
    return (location = "gameover.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_alice();
  }
}

function escolha_fase_lara(fase) {
   var fase = prompt("1 - Ficar e enfrentar o morto vivo ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "lara_fase2.html");
  } else if (fase == "2") {
    return (location = "gameover.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_lara();
  }
}

function escolha_fase_leo(fase) {
  var fase = prompt("1 - Ficar e enfrentar o morto vivo ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "leo_fase2.html");
  } else if (fase == "2") {
    return (location = "gameover.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_leo();
  }
}

/* Funções da fase 02 */
function escolha_fase2_alice(fase) {
   var fase = prompt("1 - Dar comida para o monstro ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "alice_fase3.html");
  } else if (fase == "2") {
    return (location = "gameover.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_alice();
  }
}

function escolha_fase2_lara(fase) {
   var fase = prompt("1 - Dar comida para o monstro ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "lara_fase3.html");
  } else if (fase == "2") {
    return (location = "gameover.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_alice();
  }
}

function escolha_fase2_leo(fase) {
   var fase = prompt("1 - Dar comida para o monstro ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "leo_fase3.html");
  } else if (fase == "2") {
    return (location = "gameover.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_alice();
  }
}

/* Funções da fase 03 */
function escolha_fase3_alice(fase) {
   var fase = prompt("1 - Lutar contra o ser desconhecido ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "gameover.html");
  } else if (fase == "2") {
    return (location = "venceu.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_alice();
  }
}

function escolha_fase3_lara(fase) {
   var fase = prompt("1 - Lutar contra o ser desconhecido ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "gameover.html");
  } else if (fase == "2") {
    return (location = "venceu.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_alice();
  }
}

function escolha_fase3_leo(fase) {
   var fase = prompt("1 - Lutar contra o ser desconhecido ou 2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "gameover.html");
  } else if (fase == "2") {
    return (location = "venceu.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_alice();
  }
}