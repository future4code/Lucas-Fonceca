/*
#################################################################
############# EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO #############
#################################################################

// ############# EXERCÍCIO 1 #############


1 - "O que o código abaixo está fazendo? Qual o resultado impresso no console?"
R: O código declara a variável "valor" como 0. O laço de repetição vai somando uma nova variável ("i") nesse valor
enquanto i for menor que 5. Cada vez que o código passa pelo laço, soma 1 à variável i (que também inicia em 0).
Após 1 ser somado a i, soma-se o valor da variável "valor" ao da variável "i".
"Por baixo dos panos", o javascript vai fazer o seguinte:
Declarar 0 para "valor" e "i". Somar 0 + 0 = 0.
Somar 1 ao valor de "i" (0+1 = 1). Valor passa a ser 0 ("valor") + 1 ("i") = 1
Somar 1 ao valor de "i" (1+1 = 2). Valor passa a ser 1 ("valor") + 2 ("i") = 3
Somar 1 ao valor de "i" (2+1 = 3). Valor passa a ser 3 ("valor") + 3 ("i") = 6
Somar 1 ao valor de "i" (3+1 = 4). Valor passa a ser 6 ("valor") + 4 ("i") = 10

Como o console.log está fora do bloco for, ele vai imprimir apenas o último valor, ou seja: "10".

// ############# EXERCÍCIO 2 #############

2 - Leia o código abaixo: 
(código)
a) O que vai ser impresso no console?
R: os numeros do array que são maiores que 18 (19, 21, 23, 25, 27 e 30).

b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se não, o que poderia ser usado para fazer isso?
R: Para conferir o índice de cada elemento da lista é possível chamar a lista.indexOf(numero) no console.log.
Para uma resposta mais completa eu tentaria utilizar um comando tipo console.log(`O indíce do elemento ${numero} é ${lista.indexOf(numero)}.`)
Provavelmente, para esse console.log funcionar eu teria que mudar a condição do "if" no for...of. Talvez "if" (numero > 0), mas eu só poderia responder isso com certeza testando.

// ############# EXERCÍCIO 3   #############
3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4?

R: O programa do exercício recebe o número 4 e guarda na variável "quantidadeTotal".
Em seguida, cria outra variável com o nome de "quantidadeAtual" e confere à ela o valor de 0.
Depois, compara: enquanto quantidadeAtual for menor que quantidadeAtual (0, 1, 2 e 3), ele executa o seguinte bloco:
cria a variável "linha", que recebe uma string vazia, e outra chamada "asteriscos", que começa em 0.
Aí entra outro laço de repetição: para asteriscos = 0, confere se asteriscos é menor que quantidade atual + 1 (0+1, 1+1, 2+1) e soma +1 a "asteriscos".
Enquanto esse laço de cima for verdade, a variável "linha" recebe um "*".
Como o console.log está dentro do laço "while", ele vai imprimir todas as linhas:

Na primeira reptição (0+1), imprime "*"".
Na segunda reptição (1+1), imprime "**"".
Na terceira reptição (2+1), imprime "***"".
Na quarta reptição (4+1), imprime "****"".
*/


/*
###########################################################
############# EXERCÍCIOS DE ESCRITA DE CÓDIGO #############
###########################################################
*/

// ############# EXERCÍCIO 1 #############


let bichinhosUsuario = Number(prompt(`Quantos bichinhos de estimação você tem? (responda em números)`));
let arrayDeBichinhos = [];
if (bichinhosUsuario === 0) {
  console.log(`Poxa! Talvez você devesse adotar um bichinho`);
}

while (bichinhosUsuario > 0) {
  let nomeBichinho = prompt(`Digite, um por um, o nome dos seus bichinhos`);
  arrayDeBichinhos.push(nomeBichinho);
  bichinhosUsuario--;
}

if (arrayDeBichinhos.length > 0) {
  console.log(arrayDeBichinhos);
}


// ############# EXERCÍCIO 2 #############


// 2.a)

let arrayOriginal = [13, 8, 12, 24, 31];


const imprimeNumerosArray = (numeros) => {
  for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
  }
} 

imprimeNumerosArray(arrayOriginal);

// 2.b

const imprimeNumerosArrayDivididoPorDez = (numeros) => {
  for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]/10);
  }
}
  imprimeNumerosArrayDivididoPorDez(arrayOriginal);

// 2.c

const imprimeArrayNumerosPares = (numeros) => {
  let arrayPares = [];
  for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice]%2 === 0){
      arrayPares.push(numeros[indice]);
    }
  }
  return arrayPares;
}

console.log(imprimeArrayNumerosPares(arrayOriginal))

// 2.d

const imprimeMensagem = (numeros) => {
  let novoArray = [];
  for (let indice = 0; indice < numeros.length; indice++) {
    novoArray.push(`O elemento do índex ${indice} é ${numeros[indice]}`);
  }
  return novoArray;
}

const mensagem = imprimeMensagem(arrayOriginal);
console.log(mensagem);
// 2.e


const encontraValorMaximo = (numeros) => {
  let valorMaximo = -Infinity;
  for (let indice = 0; indice < arrayOriginal.length; indice++) {
    const numero = arrayOriginal[indice];
    if (numero > valorMaximo) {
      valorMaximo = numero;
    }
  }
  return valorMaximo;
}


const encontraValorMinimo = (numeros) => {
  let valorMinimo = Infinity;
  for (let indice = 0; indice < numeros.length; indice++) {
    const numero = numeros[indice];
    if (numero < valorMinimo) {
      valorMinimo = numero;
    }
  }
  return valorMinimo;
}

console.log(`O maior número do array é ${encontraValorMaximo(arrayOriginal)}`);
console.log(`O menor número do array é ${encontraValorMinimo(arrayOriginal)}`);


/*
##############################################
############# EXERCÍCIOS DESAFIO #############
##############################################
*/

// ############# EXERCÍCIO 1 #############

const numeroJogadorUm = Number(prompt("Primeiro Jogador: digite um número"));
  console.log ("bora jogar");
  
  let numeroJogadorDois;
  let acabou = false;
  
  for (let contador = 1; !acabou ; contador++) {
    numeroJogadorDois = prompt(`Chute um número`);
        if (numeroJogadorUm > numeroJogadorDois) {
          console.log(`O número chutado foi ${numeroJogadorDois}.
          ERRRRRRRRRRROU, o número é MAIOR!!!
          Tente novamente`);
        } else if (numeroJogadorDois > numeroJogadorUm) {
          console.log(`O número chutado foi ${numeroJogadorDois}.
          ERRRRRRRRRRROU, o número é MENOR!!!
          Tente novamente`);
        } else {
          console.log(`O número chutado foi ${numeroJogadorDois}.
          PARABÉNS, VOCÊ ACERTOU`);
          console.log(`Número de tentativas: ${contador}`);
          acabou = true;
        }
    }  

// ############# EXERCÍCIO 2 #############


const numeroSorteado = Math.floor((Math.random() * 100));
console.log ("bora jogar")

let numeroJogador;

for (let contador = 1; numeroJogador !== numeroSorteado; contador++) {
  numeroJogador = prompt(`Chute um número entre 0 e 100`)
      if (numeroSorteado > numeroJogador) {
        console.log(`O número chutado foi ${numeroJogador}.
        ERRRRRRRRRRROU, o número é MAIOR!!!
        Tente novamente`)
      } else if (numeroJogador > numeroSorteado) {
        console.log(`O número chutado foi ${numeroJogador}.
        ERRRRRRRRRRROU, o número é MENOR!!!
        Tente novamente`)
      } else {
        console.log("PARABÉNS, VOCÊ ACERTOU")
        console.log(`Número de tentativas: ${contador}`)
      }
}

