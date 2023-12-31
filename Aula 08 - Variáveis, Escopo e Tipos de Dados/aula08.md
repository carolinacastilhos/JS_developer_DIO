## Diferença entre VAR, LET e CONST

- VAR: permite re-atribuição e vaza do escopo, ou seja, o hoisting vaza do escopo, só se restringindo ao escopo de funções e ao escopo global;
- LET: se restringe a qualquer tipo de escopo, funciona dentro do escopo de bloco, e é re-atribuível;
- CONST: tbm se restringe ao escopo de bloco, mas não permite re-atribuição.

## Tipos de dados

- null : ausência de valor;
- undefined: ausência de declaração, inexistência;

- quando precisamos usar a matemática que tem que ser precisa (geralmente monetária ou estatística), temos que recorrer a um tipo diferente de representação, pois o tipo number pode ter falhas de arredondamento por se basear no padrão 'Double Precision 62-bit binary format IEEE 754'. Uma das soluções é a decimal.js.

- também são do tipo Number: +Infinity, -Infinity e NaN.

## Objetos

- coleção dinâmica de chave e valor;
- declarar um objeto:

```
const x = {};
```

```
  const x = {
  nome: "Renan",
  idade: 30
  }

x.sobrenome = 'Johannsen de Paula';

console.log(x['nome']);
console.log(x.nome);
x['nome'] = 'Jose';
console.log(x.nome);
```

- objetos podem ser inclusive uma função.

```
  const pessoa = {
  nome: "Renan",
  idade: 30,
  falar: function() {
    console.log(`Meu nome é ${this.nome}`)
    }
  }

  pessoa.falar();
```

## Orientação a Protótipo

- é uma base para o objeto, é como fazemos herança no javascript.
- quando eu falo que o prototipo do renan é pessoa, quer dizer que o renan está herdando as propriedades de pessoa.
- uma cadeia de prototipos pode compor o objeto. Se não achar no prototipo, vai no outro que está descrito, e assim vai.

```
const pessoa = {
    genero = 'masculino';
}

const renan = {
    nome: 'renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.genero);

```

## Função Construtora

```
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`);
}

```

é o mesmo que:

```
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar () {
        console.log(`Meu nome é: ${this.nome}`);
    }
}

```

## Sobrescrita

- basta que a propriedade esteja declarada mais p´roxima na cadeia de protótipos que irá devolver ela. Ou seja, se a gente pedir a propriedade idade para o renan, tiver a propriedade idade na pessoa, porém tiver a propriedade idade no renan tbm, vai mostrar a propriedade idade que está declarada no renan, nem vai chegar a ir para o prototipo pessoa.

```
const pessoa = {
    idade: 18
}

const renan = {
    nome: 'renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.idade)
```

vai imprimir 30.

## Formas de Criação de Objetos Literais Com Protótipos

1.

```
const pessoa = {
    genero = 'masculino'
}

const renan = {
    nome: 'renan'.
    __proto__: pessoa
}

console.log(renan.genero)
```

2.

```
const pessoa = {
    genero = 'masculino'
}

const renan = Object.create(pessoa);

renan.nome = 'renan';

console.log(renan.genero)
```
