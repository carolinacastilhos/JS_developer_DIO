const funcoes = require("./funcoes-auxiliares");

console.log(funcoes); //imprimirá { gets: [Function: gets], print: [Function: print] }
console.log(funcoes.gets()); //imprimirá 10 (que é oq está retornando da função gets --> function gets() {  return 10; })

/* object destructuring ------------------------------------------------------------

const pessoa = {
    nome: 'Carol'
};

const { nome } = pessoa;

é igual a fazer: const nome = pessoa.nome 

No exemplo acima de funcoes, eu poderia fazer:
const { gets, print} = require("./funcoes-auxiliares");
*/
