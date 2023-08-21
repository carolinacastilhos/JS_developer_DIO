function falarMeuNome() {
  console.log("Meu nome é Renan");
}

const referenciaNova = falarMeuNome;

referenciaNova();

function falarMeuNomeCompleto(falarMeuNome) {
  falarMeuNome();
  console.log("Johannsen de Paula");
}

falarMeuNomeCompleto(falarMeuNome);

// os nomes das funções são meramente ilustrativos
// as funções elas acabam virando objetos, então podemos atribuílas à variáveis, passar como parâmetros e até retornar outra função

// function declaration
function nomeDaFuncao() {}
// é uma unidade só, então quando sofre hoisting, vai tudo para cima

// function expression - através de uma variável
const nomeDeOutraFuncao = function () {};
// neste caso, quando sofre hoisting, a declaração da constante vai para cima, mas sua atribuição segue embaixo.
