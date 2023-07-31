/* Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior número par e o menor número ímpar.  

Exemplo:
- entrada: 5, 3, 4, 1, 10, 8
- saída: maior número par: 10 | menor número ímpar: 1 */

const { gets, print } = require("./funcoes-auxiliares-ex2");

const n = gets(); //nos dá o length

let maiorValorPar = null;
let menorValorImpar = null;

for (let i = 0; i < n; i++) {
  let numero = gets();

  if (numero % 2 === 0) {
    if (maiorValorPar === null || numero > maiorValorPar) {
      maiorValorPar = numero;
    }
  } else {
    if (menorValorImpar === null || numero < menorValorImpar) {
      menorValorImpar = numero;
    }
  }
}

print(`Maior número par: ${maiorValorPar}`);
print(`Menor número ímpar: ${menorValorImpar}`);
