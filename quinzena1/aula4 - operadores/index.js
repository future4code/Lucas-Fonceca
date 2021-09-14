// ############# RESOLUÇÃO DOS EXERCÍCIOS - QUINZENA 1 - AULA 4 - LUCAS TXAI #############


//#### EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*
## Exercício 1:

a. false (bool2 é falso e o exercício pede "e" (&&), isso significa que o resultado só será verdadeiro (true) quando as duas variáveis forem verdade (true))
b. false (mesma razão do exercício a.)
c. true (aqui já muda. O exercício pede "ou" (||). No "ou", basta uma das variáveis ser verdade para que o resultado seja verdadeiro).
d. boolean
*/

/*
## Exercício 2:

Quando extraímos algum dado de um prompt, esse dado sempre vai ser uma string. Quando queremos extrair números do prompt, precisamos converter o dado do prompt em number. 
Porque assim o dado extraído pelo prompt seria convertido em number, e a soma daria certo.
Da forma que estava, no console seria impresso a concatenação dos dois números digitados (e.g.: se o usuário digitou 50 no primeiro e 13 no segundo, o resultado impresso seria 5013 ao invés de 63 como esperado).

*/

/*
## Exercício 3:

Para arrumar esse problema do exercício anterior, o meu colega, que esqueceu de converter o string em number, deveria ter digitado o seguinte código:
let primeiroNumero = Number(prompt("Digite um número!"))
let segundoNumero = Number(prompt("Digite outro número!"))

*/

//#### EXERCÍCIOS DE ESCRITA DE CÓDIGO


//## Exercício 1:

let idadeUsuario = Number(prompt("Qual a sua idade?"));
let idadeMelhorAmigue = Number(prompt("Qual a idade do seu melhor amigo ou melhor amiga?"));

let idadeMaior = idadeUsuario > idadeMelhorAmigue;
let diferencaIdade = idadeUsuario - idadeMelhorAmigue;

console.log (" >>>> Abaixo, as respostas do Exercício 1: <<<< ")
console.log ("Sua idade é maior que a da sua melhor amiga/amigo?", idadeMaior);
console.log ("A diferença de idade entre você e seu melhor amigo/amiga é de", diferencaIdade, "anos");


// ## Exercício 2:

let numeroPar = Number(prompt("Insira um número par!"));

let restoDivisao = numeroPar % 2;

console.log (" >>>> Abaixo, as respostas do Exercício 2: <<<<")
console.log ("Quando você divide", numeroPar, "por 2, o resto dessa divisão é:", restoDivisao);

// c. Ao digitar um número par e dividí-lo por 2, a divisão sempre será exata e o resto será 0. 
// d. Ao digitar um número ímpar, o programa vai dividir o número por 2 e o resto será 1. (Se você tem 5 maçãs para dividir igualmente para 2 pessoas, cada pessoa vai ficar com 2 e vai sobrar 1 maçã.)

// ## Exercício 3:

let idadeAnos = Number(prompt("Quantos anos você tem?"));

let idadeMeses = idadeAnos * 12;
let idadeDias = idadeAnos * 365;
let idadeHoras = idadeDias * 24;

console.log (" >>>> Abaixo, as respostas do Exercício 3: <<<< ")
console.log ("Você informou que sua idade é de", idadeAnos, "anos. Isso significa que você já viveu", idadeMeses, "meses,", idadeDias, "dias, e", idadeHoras, "horas. Aproximadamente.");


// ## Exercício 4:

let a = Number(prompt("Digite um número"));
let b = Number(prompt("Digite OUTRO número"));

let aMaior = a > b;
let aIgual = a === b;
let aDivisivelB = (a % b) === 0;
let bDivisivelA = (b % a) === 0;

console.log (" >>>> Abaixo, as respostas do Exercício 4: <<<< ")
console.log ("O primeiro número é maior que o segundo?", aMaior);
console.log ("O primeiro número é igual que o segundo?", aIgual);
console.log ("O primeiro número é divisível pelo o segundo?", aDivisivelB);
console.log ("O segundo número é divisível que o primeiro?", bDivisivelA);



//#### DESAFIOS

// ## Exercício 1:



let grausFahrenheit = 77;
let fahrenheitParaKelvin = (grausFahrenheit - 32)*(5/9) + 273.15;

let grausCelsius = 80;
let celsiusParaFahrenheit = (grausCelsius*(9/5)) + 32;

console.log ("a) 77ºF é igual", fahrenheitParaKelvin, "K (Kelvin).");
console.log ("b) 80ºC é igual", celsiusParaFahrenheit, "ºF (graus Fahrenheit).")

grausCelsius = 30;
celsiusParaFahrenheit = (grausCelsius*(9/5)) + 32;
celsiusParaKelvin = grausCelsius + 273.15;


console.log ("c) 30ºC é igual", celsiusParaFahrenheit, "ºF, que também é igual a", celsiusParaKelvin, "K");

grausCelsius = Number(prompt("Insira uma temperatura em celsius, sem especificar a unidade de medida."));
celsiusParaFahrenheit = (grausCelsius*(9/5)) + 32;
celsiusParaKelvin = grausCelsius + 273.15;

console.log ("d)", grausCelsius, "ºC é igual", celsiusParaFahrenheit, "ºF, que também é igual a", celsiusParaKelvin, "K");



// ## Exercício 2:


const valor = 0.05;
let consumo = 280;
let valorConsumo = valor*consumo;

console.log ("a) Uma casa que consome 280 quilowatt-hora recebe uma conta de R$", valorConsumo);

desconto = valorConsumo*(15/100);
valorComDesconto = valorConsumo - desconto;

console.log ("b) Uma casa que consome 280 quilowatt-hora recebe uma conta de R$", valorConsumo, "com desconto de 15%, a conta passaria para ", valorComDesconto);



// ## Exercício 3:

let lb = 20;
let lbParaKg = lb/2.205;

console.log ("a) 20 lb equivalem a, aproximadamente,", lbParaKg, "kg.");

let oz = 10.5;
let ozParaKg = oz/35.274;

console.log ("b) 10.5 oz equivalem a, aproximadamente,", ozParaKg, "kg.");

let mi = 100;
let miParaMetros = mi * 1609;

console.log ("c) 100 mi equivalem a, aproximadamente,", miParaMetros, "m.");

let ft = 50;
let ftParaMetros = ft/3.281;

console.log ("d) 50 ft equivalem a, aproximadamente,", ftParaMetros, "m.");

let gal = 103.56
let galParaL = gal*3.785
console.log ("e) 103.56 galões equivalem a, aproximadamente,", galParaL, "l.");


let xic = 450;
let xicParaL = xic/3.52;

console.log ("f) 450 xícaras equivalem a, aproximadamente,", xicParaL, "l.");

lb = Number(prompt("Qual o valor, em libras, que você quer converter para kilogramas?"))
lbParaKg = lb/2.205;

console.log ("g)", lb, "lb equivalem a, aproximadamente,", lbParaKg, "kg.");


// fim