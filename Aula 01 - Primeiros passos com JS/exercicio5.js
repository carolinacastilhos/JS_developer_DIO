/*
 Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
 Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 

 Código condição de pagamento: 
 1- à vista Débito, recebe 10% de desconto;
 2- à vista no dinheiro ou pix, recebe 15% de desconto;
Aula 01 - primeiros passos 3- em duas vezes, preço normal de etiqueta sem juros;
 4- acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
  const valorFinal = precoEtiqueta - precoEtiqueta * 0.1;
  console.log(valorFinal);
} else if (formaPagamento === 2) {
  const valorFinal = precoEtiqueta - precoEtiqueta * 0.15;
  console.log(valorFinal);
} else if (formaPagamento === 3) {
  console.log(precoEtiqueta);
} else {
  const valorFinal = precoEtiqueta + precoEtiqueta * 0.1;
  console.log(valorFinal);
}
