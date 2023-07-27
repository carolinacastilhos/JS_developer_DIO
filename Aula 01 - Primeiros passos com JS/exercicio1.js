/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas: 
1 - Preço de combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const valorCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 1580;

const litrosConsumidos = distanciaKm / kmPorLitro;

const valorViagem = litrosConsumidos * valorCombustivel;

console.log(valorViagem.toFixed(2));
//toFixed - vai converter o valor para texto (string) e com o 2 estamos definindo a quantidade de números após a vírgula.
