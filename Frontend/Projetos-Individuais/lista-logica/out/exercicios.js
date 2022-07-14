// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite uma altura'));
  const largura = Number(prompt('Digite uma largura'));

  console.log(largura * altura);
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt('Digite o ano atual'));
  const anoNascimento = Number(prompt('Digite seu ano de nascimento'));

  console.log(anoAtual - anoNascimento);

}

// Exercício 3
function calculaIMC() {
  const pesoUsuario = Number(prompt('Digite seu peso (em kg)'));
  const alturaUsuario = Number(prompt('Digite sua altura (em metros)'))

  console.log(pesoUsuario/(alturaUsuario*alturaUsuario));
  // escreva seu código aqui
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite o seu nome');
  const idade = prompt('Qual a sua idade?');
  const email = prompt('Digite seu e-mail');

  console.log('Meu nome é '+ nome + ', tenho '+ idade + ' anos, e o meu email é '+ email+'.');
}

// Exercício 5
function imprimeTresCoresFavoritas() {

  const primeiraCorFavorita = prompt('Digite sua cor favorita');
  const segundaCorFavorita = prompt('Digite sua segunda cor favorita');
  const terceiraCorFavorita = prompt('Digite sua terceira cor favorita');

  const coresFavoritas = [primeiraCorFavorita, segundaCorFavorita, terceiraCorFavorita]
  console.log(coresFavoritas);

}


// Exercício 6
function retornaStringEmMaiuscula() {
  
  const stringUsuario = prompt('Escreva uma frase');
  const fraseMaiuscula = stringUsuario.toLocaleUpperCase();

  console.log(fraseMaiuscula);
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = Number(prompt('Digite o custo do espetáculo de teatro'));
  const valorIngresso = Number(prompt('Digite o valor de cada ingresso do espetáculo'));

  const ingressosEspetaculo = custoEspetaculo/valorIngresso;

  console.log (ingressosEspetaculo);

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // Escreva um código que pede ao usuário duas strings e imprima no console um booleano (true ou false) 
  //indicando se elas possuem o mesmo tamanho.

  const primeiraFrase = prompt('Escreva uma frase');
  const segundaFrase = prompt('Escreva outra frase');

  const frasesMesmoTamanho = primeiraFrase.length === segundaFrase.length;

  console.log(frasesMesmoTamanho);

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraFrase = prompt('Escreva uma frase');
  const segundaFrase = prompt('Escreva outra frase');

  const primeiraFraseMinuscula = primeiraFrase.toLowerCase();
  const segundaFraseMinuscula = segundaFrase.toLowerCase();

  const frasesMesmoTamanho = primeiraFraseMinuscula === segundaFraseMinuscula;

  console.log(frasesMesmoTamanho);
}

// Exercício 10
/*
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Em qual ano estamos?'));
  const anoNascimento = Number(prompt('Digite seu nao de nascimento'));
  const anoRG = Number(prompt('Digite o ano que foi emitido o seu RG'));

}
*/
// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}