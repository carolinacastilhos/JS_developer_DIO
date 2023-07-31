class Pessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
  }
}

const carol = new Pessoa();
carol.nome = "Carolina Castilhos";
carol.idade = 31;

const bruno = new Pessoa();
bruno.nome = "Bruno Castilhos";
bruno.idade = 37;

carol.descrever();
bruno.descrever();

//-------------------------------------------------------------

class Carro {
  ano;
  modelo;
  anosDeExistencia;

  constructor(ano, modelo) {
    this.ano = ano;
    this.modelo = modelo;
    this.anosDeExistencia = 2023 - ano;
  }

  descrever() {
    console.log(
      `O carro é do modelo ${this.modelo}, ano ${this.ano} e possui ${this.anosDeExistencia} anos de criação.`
    );
  }
}

const fusca = new Carro(1990, "Fusca");

fusca.descrever();

//-------------------------------------------------------------

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
  }
}

compararPessoas(carol, bruno);
