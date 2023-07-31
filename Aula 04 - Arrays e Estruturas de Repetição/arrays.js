/* os objetos são entre { }, listas (arrays) são entre [ ].*/

const alunos = ["João", "Maria", "José"];

console.log(alunos); //Imprimirá toda a lista
console.log(alunos[0]); //João

alunos.push("Renan"); //adiciona o "Renan" na última posição;

alunos[4] = "Vinícius"; //adiciona o "Vinicius" na posição 4;
// mas desta forma também conseguimos substituir quem está nesta posição por outro.

console.log(alunos); // João, Maria, José, Renan, Vinicius

alunos.pop(); //remove o último item;

console.log(alunos); // João, Maria, José, Renan

alunos.shift(); //remove o primeiro item da lista;

console.log(alunos); // Maria, José, Renan
