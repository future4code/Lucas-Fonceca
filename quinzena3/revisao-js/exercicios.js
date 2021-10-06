// EXERCÍCIO 01
function inverteArray(array) {
  let numerosInvertidos = [];
  for (let i = array.length -1; i >= 0; i--) {
    numerosInvertidos.push(array[i]);
   }
   return numerosInvertidos;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter((item) => {
    return (item % 2) === 0
  });
  
  return numerosPares.map((item) => {
    return item**2
  });
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  return array.filter((item) => {
    (item % 2) === 0
  });  
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] > maiorNumero){
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length;  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;
  
  let respostas = [];

  let expressaoUm = booleano1 && booleano2 && !booleano4;
  let expressaoDois = (booleano1 && booleano2) || !booleano3;
  let expressaoTres = (booleano2 || booleano3) && (booleano4 || booleano1);
  let expressaoQuatro = !(booleano2 && booleano3) || !(booleano1 && booleano3);
  let expressaoCinco = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3);

  respostas.push(expressaoUm);
  respostas.push(expressaoDois);
  respostas.push(expressaoTres);
  respostas.push(expressaoQuatro);
  respostas.push(expressaoCinco);

  return respostas;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && a === c) {
    return 'Equilátero'
  } else if (((a === b) && (a !== c)) || ((a === c && a !== b)) || ((b === c && b !== a))) {
    return 'Isósceles'
  } else {
    return 'Escaleno'
  }

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}