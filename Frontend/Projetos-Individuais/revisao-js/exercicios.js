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
  let numerosPares = array.filter((item) => {
    return (item % 2) === 0
  });
  return numerosPares
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
  let novoArray = [];

  for(let numero = 0; novoArray.length < n; numero++){
    if (numero%2===0) {
      novoArray.push(numero);
    }
  }
  return novoArray;
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
  const numeros = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: false,
    diferenca: 0
  }
  if (num1 > num2) {
    numeros.maiorNumero = num1;
    menorNumero = num2;
  } else {
    numeros.maiorNumero = num2;
    menorNumero = num1;
  }

  numeros.diferenca = numeros.maiorNumero - menorNumero;
  numeros.maiorDivisivelPorMenor = numeros.maiorNumero % menorNumero === 0;

  return numeros
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j +1]) {
        let swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
  }
  let segundoMenor = array[1];
  let segundoMaior = array[array.length-2];
  let segundoMaiorEMenor = [(segundoMaior), (segundoMenor)]

  return segundoMaiorEMenor;
}

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j +1]) {
        let swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
  }
  return array;
}

// EXERCÍCIO 12
function filmeFavorito() {

  const filmeFavoritoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return filmeFavoritoAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {

  const filmeFavoritoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }

  return `Venha assistir ao filme ${filmeFavoritoAstrodev.nome}, de ${filmeFavoritoAstrodev.ano}, dirigido por ${filmeFavoritoAstrodev.diretor} e estrelado por ${filmeFavoritoAstrodev.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
    const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2*(lado1 + lado2),
      area: (lado1*lado2)
    }
    return retangulo;
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novaPessoa ={
    ...pessoa,
    nome: "ANÔNIMO"
  }

  return novaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let pessoasMaioresDe18 = arrayDePessoas.filter((item) => {
    return item.idade >= 18
  })
  return pessoasMaioresDe18;
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let pessoasMenoresDe18 = arrayDePessoas.filter((item) => {
    return item.idade < 18
  })
  return pessoasMenoresDe18;
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const numerosMultiplicadosPor2 = array.map((item) => {
    return item*2;
  })
  return numerosMultiplicadosPor2;
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const numerosMultiplicadosPor2S = array.map((item) => {
    return (item*2).toString();
  })
  return numerosMultiplicadosPor2S;
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const parOuImpar = array.map((item) => {
    if(item%2===0){
      return `${item} é par`
    } else {
      return `${item} é ímpar`
    }
  })
  return parOuImpar;
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let menorDe60 = pessoas.filter((item) => {
    return item.idade < 60 && item.idade > 14 && item.altura >= 1.5
  })
  return menorDe60;
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let menorDe1e50 = pessoas.filter((item) => {
    return item.altura < 1.5 || item.idade <= 14 || item.idade >= 60
  })
  return menorDe1e50;
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  for (let i = 0; i < consultasNome.length; i++) {
    for (let j = 0; j < consultasNome.length - 1 - i; j++) {
      if (consultasNome[j].nome > consultasNome[j + 1].nome) {
        let swap = consultasNome[j];
        consultasNome[j] = consultasNome[j + 1];
        consultasNome[j + 1] = swap;
      }
    }
  }
  return consultasNome;
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  for (let i = 0; i < consultasData.length; i++) {
    for (let j = 0; j < consultasData.length - 1 - i; j++) {
      
      let separaData1 = consultasData[j].dataDaConsulta.split("/");
      let separaData2 = consultasData[j + 1].dataDaConsulta.split("/");

      let data1 = new Date(+separaData1[2], separaData1[1] - 1, +separaData1[0]).getTime()
      let data2 = new Date(+separaData2[2], separaData2[1] - 1, +separaData2[0]).getTime()
      
      if (data1 > data2) {
        let swap = consultasData[j];
        consultasData[j] = consultasData[j + 1];
        consultasData[j + 1] = swap;
      }
    }
  }
  return consultasData;
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  for (let i = 0; i < contas.length; i++) {
    for (let j = 0; j < contas[i].compras.length; j++) {
      contas[i].saldoTotal -= contas[i].compras[j];
    }
  }
  return contas;
}
