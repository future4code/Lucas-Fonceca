//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. 
// 10
// 10 5

// 2. 
// 10 10 10

// 3. 
// O programa calcula o valor (por hora) do pagamento do usuário, com base em informações inseridas pelo próprio usuário em prompts (janelas pop-up). Nomes melhores para variáveis poderiam ser:
// Para a variável p, horasTrabalhadasDia; para a variável t, pagamentoPorDia.

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

/*
let nome;
let idade;

console.log (typeof nome)
console.log (typeof idade)

//O tipo das variáveis é "undefined", porque não foi atribuído nenhum valor a elas.

nome = prompt ('Digite seu nome')
idade = prompt ('Digite sua idade')

console.log (typeof nome)
console.log (typeof idade)

//Agora o tipo da variável mudou, de undefined para string, pois estamos atribuindo valores a elas (informados pelo próprio usuário). É interessante notar, também, que a variável "idade", apesar de ser só número, aparece com o tipo string ao invés de number. Isso ocorre porque o dado da variável foi obtido através de um prompt, e toda informação obtida por um prompt é uma string. Toda. Sempre. Obs: Ao clicar em "Cancelar", ao invés de "ok" no prompt, o tipo passa a ser "object".

console.log ('Olá ', nome, ', você tem ', idade, ' anos.')
*/


// 2.

/*
let galoGanhou = prompt ('O Galo ganhou seu último jogo?');
let usuarioAlmocou = prompt ('Você almoçou hoje?');
let usuarioCasado = prompt ('Você é casado?');

console.log ('O Galo ganhou seu último jogo?', galoGanhou);
console.log ('Você almoçou hoje?', usuarioAlmocou);
console.log ('Você é casado?', usuarioCasado);
*/

//3

/*
let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log ('O novo valor de a é', a);
console.log ('O novo valor de b é', b);
*/

// DESAFIO
/*
let primeiroNumeroTexto = prompt ('Digite um número');
let segundoNumeroTexto = prompt ('Digite outro número');

let primeiroNumero = Number(primeiroNumeroTexto);
let segundoNumero = Number (segundoNumeroTexto);

//1.
let x = primeiroNumero + segundoNumero;
console.log (x);

//2.
let y = primeiroNumero * segundoNumero;
console.log (y);

*/