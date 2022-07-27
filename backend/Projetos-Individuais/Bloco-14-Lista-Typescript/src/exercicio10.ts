function recebeCPF(cpf: string): number []{
  const cpfSemPontos = cpf.split(".").join("");
  const cpfSemTraco = cpfSemPontos.split("-").join("");

  const arrayCPF = cpfSemTraco.split("") as unknown as number[];

  let i = 10;
  let j = 0;
  let cpfMultiplicado: number[];

  while (i > 2) {
    while (j < arrayCPF.length) {
      j++;
    }
    cpfMultiplicado = arrayCPF[j] * i as unknown as number[];
    i--;
  }

  return cpfMultiplicado;
}

console.log(recebeCPF("093.434.809-03"));
