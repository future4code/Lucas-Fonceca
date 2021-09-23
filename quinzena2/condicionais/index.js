/* ~~~~~~~~~~~~~ QUINZENA 2 - AULA 8 - CONDICIONAIS - EXERCÍCIOS ~~~~~~~~~~~~~*/ 

/* 
#################################################################
############# EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO #############
#################################################################
EXERCÍO 1 
A) O código pede ao usuário um número e confere se esse número é par ou não. 
B) Se for par, passa no teste.
C) Se for ímpar, não passa.

EXERCÍCIO 2
A) O código serve para mostrar ao usuário o preço de uma determinada fruta em um supermercado.
B) O preço da fruta maçã é R$ 2.25
C) A mensagem que apareceria caso retirássemos o break seria "O preço da fruta pêra é R$ 5". Pois caso o break seja omitido, o próximo case será executado, mesmo que o valor não corresponda ao digitado.

EXERCÍCIO 3
A) A primeira linha pede ao usuário um número. Como toda entrada através de um prompt é uma string, essa primeira linha também transforma a entrada em um número através do "Number" na frente do (prompt).
B) Caso o número digitado seja 10 (ou qualquer outro número positivo), a mensagem apresentada no terminal será "Esse número passou no teste". Caso seja -10 (ou qualquer outro número negativo, e creio que 0 também) nenhuma mensagem será impressa no console.
C) Sim, aparecerá uma mensagem de erro avisando que mensagem não foi definida. Isso acontece porque, apesar de a pessoa que desenvolveu o código ter declarado a variável mensagem, ela declarou dentro do bloco "if" e imprimiu a mensagem no escopo global, ou seja, fora do bloco if.
*/

/* 
#################################################################
############# EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO #############
#################################################################
*/

//############# Exercício 1 #############


let idadeUsuario = Number(prompt('Digite sua idade'));

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir");
} else {
    console.log("Você não pode dirigir");
}

//############# Exercício 2 #############


let turnoEstudoUsuario = prompt("Em qual turno do dia você estuda? Digite M para matutino, V para vespertino ou N para noturno")
let turnoEstudoUsuarioMaiusculo = (turnoEstudoUsuario.toUpperCase())

if (turnoEstudoUsuarioMaiusculo === "M") {
    console.log ('Bom Dia!')
} else if (turnoEstudoUsuarioMaiusculo === "V") {
    console.log ('Boa Tarde!')
} else if (turnoEstudoUsuarioMaiusculo === "N"){
    console.log ('Boa Noite!')
} else {
    console.log ("Favor digitar M para matutino, V para vespertino ou N para noturno")
}

//############# Exercício 3 #############

let turnoEstudoUsuario = prompt("Em qual turno do dia você estuda? Digite M para matutino, V para vespertino ou N para noturno")
let turnoEstudoUsuarioMaiusculo = (turnoEstudoUsuario.toUpperCase())

switch (turnoEstudoUsuarioMaiusculo) {
    case "M":
        console.log ("Bom Dia!")        
        break;
    case "V":
        console.log ("Boa Tarde!")        
        break;
    case "N":
        console.log ("Boa Noite!")        
        break;        
    default: 
        console.log ("Favor digitar M para matutino, V para vespertino ou N para noturno")
        break;
}

//############# Exercício 4 #############

let generoFilme = prompt("Qual o gênero do filme que vamos assistir?").toUpperCase();
let valorEntrada = Number(prompt("Qual o valor do ingresso?"));

if (generoFilme === "FANTASIA" && valorEntrada <= 15) {
    console.log ("Bom filme");
} else {
    console.log ("Escolha outro filme :(");
}

/* 
####################################
############# DESAFIOS #############
####################################
*/
// //############# Desafio 1 #############

let generoFilme = prompt("Qual o gênero do filme que vamos assistir?").toUpperCase();
let valorIngresso = Number(prompt("Qual o valor do ingresso?"));
let lanchinho = prompt("O que você vai querer de lanchinho durante o filme?");

if (generoFilme === "FANTASIA" && valorIngresso <= 15) {
    console.log ("Bom filme");
    console.log(`Aproveite o seu ${lanchinho}`);
} else {
    console.log("Escolha outro filme :(");
    console.log(`Bad, bad server. No ${lanchinho} for you`); 
}

//############# Desafio 2 #############


let nomeCompleto = prompt(`Qual seu nome completo?`);
let tipoDeJogo = prompt(`Qual o tipo de jogo? 
Digite IN para jogos internacionais ou DO para jogos domésticos`).toUpperCase();
let etapaDoJogo = prompt(`Qual a etapa do jogo? 
Digite SF para Semi-final, DT para decisão de terceiro lugar ou FI para final`).toUpperCase();
let tipoDoIngresso = Number(prompt(`Qual o tipo de ingresso? 
Opções disponíveis: 1, 2, 3 e 4`));
let quantidadeDeIngresso = Number(prompt('Quantos ingressos você pretende vender?'));
    
    if (etapaDoJogo === "SF" && tipoDoIngresso === 1) {
        valorDoIngresso = 1320;
    } else if (etapaDoJogo === "SF" && tipoDoIngresso === 2){
        valorDoIngresso = 880;
    } else if (etapaDoJogo === "SF" && tipoDoIngresso === 3){
        valorDoIngresso = 550;
    } else if (etapaDoJogo === "SF" && tipoDoIngresso === 4){
        valorDoIngresso = 220;
    } else if (etapaDoJogo === "FI" && tipoDoIngresso === 1){
        valorDoIngresso = 1980;
    } else if (etapaDoJogo === "FI" && tipoDoIngresso === 2){
        valorDoIngresso = 1320;
    } else if (etapaDoJogo === "FI" && tipoDoIngresso === 3){
        valorDoIngresso = 880;
    } else if (etapaDoJogo === "FI" && tipoDoIngresso === 4){
        valorDoIngresso = 330;
    } else if (etapaDoJogo === "DT" && tipoDoIngresso === 1){
        valorDoIngresso = 1980;
    } else if (etapaDoJogo === "DT" && tipoDoIngresso === 2){
        valorDoIngresso = 1320;
    } else if (etapaDoJogo === "DT" && tipoDoIngresso === 3){
        valorDoIngresso = 880;
    } else if (etapaDoJogo === "DT" && tipoDoIngresso === 4){
        valorDoIngresso = 330;
    }

    if (tipoDeJogo === "DO") {
        valorDoIngresso = valorDoIngresso;
    } else if (tipoDeJogo === "IN") {
        valorDoIngresso = valorDoIngresso / 4.10;
    } else {
        console.log ("Escolha o tipo de jogo entre IN para jogos internacionais ou DO para jogos domésticos")
    }

    let valorTotalDosIngressos = valorDoIngresso * quantidadeDeIngresso;

    if (tipoDeJogo === "DO") {
        tipoDeJogo = "Nacional"
    }
    if (tipoDeJogo === "IN") {
        tipoDeJogo = "Internacional"
    }
    if (etapaDoJogo === "SF") {
        etapaDoJogo = "Semi-final"
    } else if (etapaDoJogo === "DT") {
        etapaDoJogo = "Disputa de 3º Lugar"
    } else if (etapaDoJogo === "FI") {
        etapaDoJogo = "Final"
    }

    if (tipoDeJogo === "Nacional") {
    console.log(
    `--- Dados da compra ---
    Nome do cliente:  ${nomeCompleto} 
    Tipo do jogo:  ${tipoDeJogo} 
    Etapa do jogo:  ${etapaDoJogo} 
    Categoria:  ${tipoDoIngresso} 
    Quantidade de Ingressos:  ${quantidadeDeIngresso} ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ ${valorDoIngresso}
    Valor total:  R$ ${valorTotalDosIngressos}
    `)
    } else {
    console.log(
    `--- Dados da compra ---
    Nome do cliente:  ${nomeCompleto} 
    Tipo do jogo:  ${tipoDeJogo} 
    Etapa do jogo:  ${etapaDoJogo} 
    Categoria:  ${tipoDoIngresso} 
    Quantidade de Ingressos:  ${quantidadeDeIngresso} ingressos 
    ---Valores--- 
    Valor do ingresso:  U$ ${valorDoIngresso}
    Valor total:  U$ ${valorTotalDosIngressos}
    `)   
    }

