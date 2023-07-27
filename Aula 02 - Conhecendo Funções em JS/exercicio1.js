function escreverNome(nome) {
  return "Meu nome é " + nome;
}

// --------------------------------------------------------

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escreverNome("Carol") + " e sou maior de idade.");
  } else {
    console.log(escreverNome("Carol") + " e sou menor de idade.");
  }
}

verificarIdade(25);
