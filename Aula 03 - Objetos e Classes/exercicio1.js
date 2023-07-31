/* Criar uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de km e o preço do combustível, 
nos dê o valor gasto em reais para realizar este percurso.*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoViagem(distanciaKm, valorCombustivel) {
    const valorViagem = distanciaKm * this.gastoMedioPorKm * valorCombustivel;
    console.log(
      `O valor gasto para realizar o percurso foi R$ ${valorViagem.toFixed(2)} reais.`
    );
  }
}

const fusca = new Carro("Fusca", "Azul", 1/12);
console.log(fusca);
fusca.calcularGastoViagem(70, 5);


