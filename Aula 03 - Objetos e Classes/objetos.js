const carol = {
  nome: "Carolina Castilhos",
  idade: 31,
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
  },
};

console.log(carol.nome);
console.log(carol.idade);
console.log(carol);

carol.altura = 1.57;

console.log(carol);

delete carol.idade;

console.log(carol);

carol.descrever();

const atributo = "idade";

console.log(carol[atributo]);
console.log(carol["nome"]);
