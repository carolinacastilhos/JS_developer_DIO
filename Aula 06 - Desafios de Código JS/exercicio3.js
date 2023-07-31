/* Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o cálculo, receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira: 
    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicionais dos benefícios
    
Para calcular o percentual de impostos segue as aliquotas:
    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

 Exemplo:
    Entrada: 2000, 250
    Saída: 2050.00   
    */

const { gets, print } = require("./funcoes-auxiliares-ex3");

const valorSalario = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario > 1100 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const aliquotaImposto = pegarAliquota(valorSalario);

const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);

const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir);
