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

function escolha_fase_alice(fase) {
  var fase = prompt("1 - Ficar e enfrentar o morto vivo"+ "<br>"+ "2 - Correr e se esconder");
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
  var fase = prompt("1 - Ficar e enfrentar o morto vivo"+ "<br>"+ "2 - Correr e se esconder");
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
  var fase = prompt("1 - Ficar e enfrentar o morto vivo"+ "<br>"+ "2 - Correr e se esconder");
  if (fase == "1") {
    return (location = "lara_fase2.html");
  } else if (fase == "2") {
    return (location = "gameover.html");
  } else {
    alert("Resposta incorreta!  Favor responda com 1 ou 2:");
    escolha_fase_leo();
  }
}



