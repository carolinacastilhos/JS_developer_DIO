## Diferença entre VAR, LET e CONST

- VAR: permite re-atribuição e vaza do escopo, ou seja, o hoisting vaza do escopo, só se restringindo ao escopo de funções e ao escopo global;
- LET: se restringe a qualquer tipo de escopo, funciona dentro do escopo de bloco, e é re-atribuível;
- CONST: tbm se restringe ao escopo de bloco, mas não permite re-atribuição.

## Tipos de dados

- null : ausência de valor;
- undefined: ausência de declaração, inexistência;

- quando precisamos usar a matemática que tem que ser precisa (geralmente monetária ou estatística), temos que recorrer a um tipo diferente de representação, pois o tipo number pode ter falhas de arredondamento por se basear no padrão 'Double Precision 62-bit binary format IEEE 754'. Uma das soluções é a decimal.js.

- também são do tipo Number: +Infinity, -Infinity e NaN.

## objetos

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
