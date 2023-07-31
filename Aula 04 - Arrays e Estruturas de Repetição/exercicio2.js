/* Crie um programa que seja capaz de percorrer uma lista de números 
e imprima cada número par encontrado.
*/

const numeros = [1, 5, 6, 8, 10, 12, 13];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}
