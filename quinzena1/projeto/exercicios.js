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
  let alturaRetangulo = prompt('Digite a altura do retângulo');
  let larguraRetangulo = prompt('Digite a largura do retângulo');

  let areaaRetangulo = (alturaRetangulo * larguraRetangulo);

  console.log(areaaRetangulo);
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = prompt('digite o ano em que estamos');
  let anoNascimento = prompt('digite o ano que você nasceu');

  let idadeUsuario = (anoAtual - anoNascimento);

  console.log(idadeUsuario);
}

// Exercício 3
function calculaIMC() {
  const pesoUsuario = prompt('Digite seu peso (em kg)');
  const alturaUsuario = prompt('Digite sua altura (em m)');

  const calculoIMC = pesoUsuario / (alturaUsuario*alturaUsuario);

  console.log(calculoIMC);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt('Digite seu nome');
  const idadeDoUsuario = prompt('Digite sua idade');
  const emailUsuario = prompt('Digite seu e-mail');

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const corFavoritaUsuario = prompt('Digite sua cor favorita');
  const segundaCorFavoritaUsuario = prompt('Digite sua segunda cor favorita');
  const terceiraCorFavoritaUsuario = prompt('Digite sua terceira cor favorita');

  coresFavoritas = ([corFavoritaUsuario, segundaCorFavoritaUsuario, terceiraCorFavoritaUsuario]);

  console.log(coresFavoritas);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const fraseUsuario = prompt ('Digite uma frase');

  const fraseEmMaiusculo = fraseUsuario.toUpperCase();

  console.log(fraseEmMaiusculo);
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt('Digite o custo do espetáculo de Teatro');
  const valorIngresso = prompt('Digite o valor a ser cobrado em cada ingresso');

  const espetaculoSemPrejuizo = (custoEspetaculo/valorIngresso);

  console.log(espetaculoSemPrejuizo);
}
 
// Exercício 8

function checaStringsMesmoTamanho() {
  const primeiraFrase = prompt('Digite uma frase');
  const segundaFrase = prompt('Agora digite OUTRA frase');

  const comparaTamanho = primeiraFrase.length === segundaFrase.length

  console.log(comparaTamanho);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const fraseUm = prompt('Digite uma frase');
  const fraseDois = prompt('Agora digite OUTRA frase');

  const fraseUmMinusculo = fraseUm.toLowerCase();
  const fraseDoisMinusculo = fraseDois.toLowerCase();

  const comparaIgualdade = fraseUmMinusculo === fraseDoisMinusculo

  console.log(comparaIgualdade);
}

// Exercício 10 
function checaRenovacaoRG() {
  const anoAtual = prompt ('Digite o ano atual');
  const anoNascimentoUsuario = prompt('Digite seu ano de nascimento');
  const anoCarteiraDeIdentidade = prompt('Digite o ano que sua carteira de identidade foi emitida');

  const idade = (anoAtual - anoNascimentoUsuario);
  const anoRenovacao = (anoAtual - anoCarteiraDeIdentidade);

  const menosVinteAnos = (idade <= 20) && (anoRenovacao >= 5); 
  const entreVinteCinquentaAnos = ((idade > 20) && (idade <= 50)) && (anoRenovacao >= 10);
  const maiorCinquenta = (idade > 50) && (anoRenovacao >= 15);

  const renova = (menosVinteAnos || entreVinteCinquentaAnos || maiorCinquenta);

  console.log (renova);

}

// Exercício 11

function checaAnoBissexto() {
  const anoUsuario = prompt('Vamos checar se um ano é (ou foi) bissexto. Digite um ano');

  const multipoDeQuatro = anoUsuario%4 === 0;
  const anoMultiploDeCem = anoUsuario%100 !==0;
  const anoMultiploDeQuatrocentos = anoUsuario%400 === 0;

  const ehBissexto = (multipoDeQuatro && anoMultiploDeCem || anoMultiploDeQuatrocentos);


  console.log(ehBissexto);

}

// Exercício 12 
function checaValidadeInscricaoLabenu() {

  const idade = prompt('Você tem mais de 18 anos?');
  const ensinoMedio= prompt('Você possui o ensino médio completo?');
  const horario = prompt('Você possui disponibilidade exclusiva durante os horários do curso?');

  const checaInscricao = idade === "sim" && ensinoMedio === "sim" && horario === "sim";

  console.log(checaInscricao);
}

