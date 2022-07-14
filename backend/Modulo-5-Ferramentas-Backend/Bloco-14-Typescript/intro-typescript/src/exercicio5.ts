// function checaRenovacaoRG() {
//     const anoAtual = Number(prompt("Digite o ano atual"))
//     const anoNascimento = Number(prompt("Digite o ano de nascimento"))
//     const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

//     let idade = anoAtual - anoNascimento
//     let tempoCarteira = anoAtual - anoEmissao

//       if(idade <= 20 ) {
//        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"

//     }else if(idade >= 20 || idade <= 50) {
//        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"

//     }else if(idade > 50) {
//        return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"

//      }else {
//          return "error"
//      }

//  }

function checaRenovaRG(): string {
  const anoAtual: number = Number(prompt("Digite o ano atual"));
  const anoNascimento: number = Number(prompt("Digite o ano de nascimento"));
  const anoEmissao: number = Number(prompt("Digite o ano de emissão do documento"));

  let idade: number = anoAtual - anoNascimento;
  let tempoCarteira: number = anoAtual - anoEmissao;

  if (idade <= 20) {
    return tempoCarteira >= 5
      ? "passou dos 5 anos precisa renovar"
      : "ainda não passou os 5 anos";
  } else if (idade >= 20 || idade <= 50) {
    return tempoCarteira >= 10
      ? "passou dos 10 anos precisa renovar"
      : "ainda não passou os 10 anos";
  } else if (idade > 50) {
    return tempoCarteira >= 15
      ? "passou dos 15 anos precisa renovar"
      : "ainda não passou os 15 anos";
  } else {
    return "error";
  }
}
