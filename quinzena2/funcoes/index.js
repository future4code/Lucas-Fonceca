// //                              Quinzena 2 - Aula 06 - Funções - Exercícios (Lucas Txai)
// /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// /* 
// Exercício 1:

// A) "O que vai ser impresso no console?"
// R: 10
// 50

// B) "O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?"
// R: Acredito que, como estamos chamando a função declarada, ela iria fazer o que se pede (multiplicar o parâmetro, que é o valor entre parênteses, por cinco) e guardaria esse valor. No entanto, nada seria impresso no console.

// Exercício 2:

// let textoDoUsuario = prompt("Insira um texto"); // recebe um texto do usuário

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura") // transforma o texto em letra minúscula, e então checa se o texto contém "cenoura"
// }

// const resposta = outraFuncao(textoDoUsuario) // a função "outra função" recebe como paramêtro o texto que o usuário escreveu no prompt
// console.log(resposta) // imprime no console, em letras minúsculas, o texto que o usuário escreveu no console e checa se o texto contém a palavra "cenoura"


// A) "Explique o que essa função faz e qual é sua utilidade" 
// R: A função recebe um texto e transforma esse texto em letra minúscula, e então checa se o texto contém a palavra "cenoura".

// B) "Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   Eu gosto de cenoura
//      ii.  CENOURA é bom pra vista
//      iii. Cenouras crescem na terra"

// R: 
// i. "eu gosto de cenoura. true"
// ii. "cenoura é bom pra vista. true"
// iii. "cenouras crescem na terra. true"
// */ 

// /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ EXERCÍCIOS DE ESCRITA DE CÓDIGO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// /* EXERCÍCIO 1 */

// //a.

// function informacoesSobreMim() {
//     const informacoes = (`Eu sou Lucas, tenho 28 anos, moro em Gouveia (MG) e sou professor de História`);
//     return informacoes;
// }

// console.log(informacoesSobreMim());

// // b.

// function informacoesUsuario(nome, idade, cidade, profissao) {

//     nome = prompt("Digite seu nome");
//     idade = Number(prompt('Digite sua idade'));
//     cidade = prompt('Em qual cidade você mora?');
//     profissao = prompt('Qual sua profissão?');

//     const fraseInformacoesUsuario = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`);
//     return fraseInformacoesUsuario;
// }

// console.log(informacoesUsuario());


// /* EXERCÍCIO 2 */

// //a.
// function somaNumeros(primeiroNumero, segundoNumero) {

//     const soma = primeiroNumero + segundoNumero;

//     return soma
// }

// console.log (somaNumeros(9,4))

// //b.

// function confereNumeroMaior(numero1, numero2) {
//     const numeroMaior = (numero1 >= numero2)

//     return numeroMaior;
    
// }

// console.log(`13 é maior que 5`, confereNumeroMaior(13, 5));
// console.log(`5 é maior que 13`, confereNumeroMaior(5, 13));
// console.log(`13 é igual a 13`, confereNumeroMaior(13, 13));

// // c. 

// function numeroEhPar(numero) {
//     const checaNumeroPar = numero % 2 === 0;

//     return checaNumeroPar;    
// }

// console.log(`8 é par? ${numeroEhPar(8)}`);
// console.log(`13 é par? ${numeroEhPar(13)}`);

// // d. 

// function imprimeTamanhoEMaisuculas(frase) {
//     const fraseImpressa = (` ${frase.toUpperCase()} ${frase.length}`);


//     return fraseImpressa;

// }
// console.log(imprimeTamanhoEMaisuculas("Galo Forte e Vingador"));

// /* EXERCÍCIO 3 */

// function somarNumeros(numero1, numero2) {
//     const soma = (numero1 + numero2);
//     return soma;
// }

// function subtrairNumeros(numero1, numero2) {
//     const subtracao = (numero1 - numero2);
//     return subtracao;
// }

// function multiplicarNumeros(numero1, numero2) {
//     const multipicacao = (numero1*numero2);
//     return multipicacao;
// }

// function dividirNumeros(numero1, numero2) {
//     const divisao = (numero1/numero2)
//     return divisao;
// }

// const numero1 = Number(prompt('Digite um número'));
// const numero2 = Number(prompt('Digite outro número'));

// console.log(`Números inseridos: ${numero1} e ${numero2}
// Soma: ${somarNumeros(numero1, numero2)}
// Diferença: ${subtrairNumeros(numero1, numero2)}
// Multiplicação: ${multiplicarNumeros(numero1, numero2)}
// Divisão: ${dividirNumeros(numero1, numero2)}`);


// /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DESAFIOS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// /* EXERCÍCIO 1 */

// //a.

// const imprimirParametro = (parametro) => {
//     const parametroImpresso = (parametro);

//     console.log(parametroImpresso);
// }


// //b. 

// const receberDoisValores = (umNumero, outroNumero) => {
//     const somaNumerosUmEOutro = (umNumero + outroNumero);

//     imprimirParametro(somaNumerosUmEOutro);
// }

// receberDoisValores(8, 5);

// console.log(receberDoisValores(8, 5));

// // /* EXERCÍCIO 2 */

// function calcularHipotenusa(catetoAdjacente, catetoOposto) {
//     const valorDaHipotenusa = ((catetoAdjacente*catetoAdjacente) + (catetoOposto*catetoOposto)) ** (1/2);

//     return valorDaHipotenusa

// }
// console.log(calcularHipotenusa(6,8))

