## declaração das funções

1. forma literal

```
function funcao1() {
    console.log(this)
}

```

2. arrow function

- é uma função anônima
- principal diferença entre elas é que a arrow function não tem contexto, ou seja, não tem o this, não isola o contexto dentro do bloco.

```
const funcao2 = () => {
    console.log(this)
}
```

EXEMPLO:

```
function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const renan = {
    nome: 'Renan',
    funcao1,
    funcao2
}

renan.funcao1();
renan.funcao2();

```

imprimirá no console:

{
nome: 'Renan',
funcao1: [Function: funcao1]
funcao2: [Function: funcao2]
}
{}
