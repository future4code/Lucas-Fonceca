// /* ~~~~~~~~~~~~~~~~~~~~ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ~~~~~~~~~~~~~~~~~~~~*/

// /* Exercício 1:*/

// // a.
// // b.
// // c. 11
// // d. 3
// // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // f. 9


// /* Exercício 2:*/

// // Caso a entrada do usuário seja a indicada (Subi num ônibus em Marrocos), o valor impresso no cosole será "SUBI NUM ÔNIBUS EM MIRROCOS, 27" (sem as aspas).

// /* ~~~~~~~~~~~~~~~~~~~~ EXERCÍCIOS DE ESCRITA DE CÓDIGO ~~~~~~~~~~~~~~~~~~~~*/

// /* Exercício 1:*/

// // const nomeDoUsuario = prompt("Por favor, digite o seu nome");
// // const emailDoUsuario = prompt(`Olá ${nomeDoUsuario}, por favor, digite seu e-mail.`);

// // console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo, ${nomeDoUsuario}!`);

// /* Exercício 2:*/
// // Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// let comidasFavoritas = [`Pizza` , 
// `
// Feijão Tropeiro`, // aqui eu coloquei 
// `
// Fricassê`, 
// `
// Strogonoff`, 
// `
// Lasanha`];
// // a) Imprima na tela o array completo
// console.log(comidasFavoritas);

// // b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
// console.log(`Essas são minhas comidas favoritas: 
// ${comidasFavoritas}`);

// // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

// let comidaFavoritaUsuario = prompt('Qual a sua comida favorita?');

// comidasFavoritasNova = comidasFavoritas.splice(1, 1, `\n${comidaFavoritaUsuario}`);

// console.log(`Minhas novas comidas favoritas são: 
// ${comidasFavoritas}`);


// /* Exercício 3:*/

// /* a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas` */ 
// let listaDeTarefas = [];

// /* b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array */ 
// let primeiraTarefa = prompt('Digite uma tarefa que você precise completar no dia de hoje')
// let segundaTarefa = prompt('Digite outra tarefa que você precise completar no dia de hoje')
// let terceiraTarefa = prompt('Digite uma terceira tarefa que você precise completar no dia de hoje')

// listaDeTarefas.push(primeiraTarefa);
// listaDeTarefas.push(segundaTarefa);
// listaDeTarefas.push(terceiraTarefa);

// /* c)  Imprima o array na tela*/ 
// console.log(listaDeTarefas);

// /* d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2  */

// let indiceTarefaUsuario = prompt('Escolha um dos seguintes números: 0, 1 ou 2')

// /* e)  Remova da lista o item de índice que o usuário escolheu. */
// listaDeTarefas.splice(indiceTarefaUsuario, 1);

// /* f) Imprima o array na tela */ 
// console.log(listaDeTarefas);

// /* ~~~~~~~~~~~~~~~~~~~~ DESAFIOS ~~~~~~~~~~~~~~~~~~~~*/

// /* 1 Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços */


// const fraseUsuario = prompt('digite uma frase');

// const array = fraseUsuario.split(' ')

// console.log(array);

// /* 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array */

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];


// let posicaoAbacaxi = frutas.indexOf("Abacaxi");
// let comprimentoArray = frutas.length

// console.log(`O índice do Abacaxi na array é ${posicaoAbacaxi}, enquanto o tamanho do array é de ${comprimentoArray} elementos.`);
