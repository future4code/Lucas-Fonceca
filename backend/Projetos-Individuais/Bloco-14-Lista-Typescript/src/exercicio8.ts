function recebeDatasDeNascimentoEEmissaoIdentidade(
  dataDeNascimento: string,
  dataEmissaoIdentidade: string
): boolean {
  dataDeNascimento = prompt("Qual a sua data de nascimento? (DD/MM/AAAA)");
  dataEmissaoIdentidade = prompt("Qual a data da emissão da sua carteira de identidade? (DD/MM/AAAA)");

  const diaMesAnoNascimento: string[] = dataDeNascimento.split("/");
  const diaMesAnoId: string[] = dataEmissaoIdentidade.split("/");

  const birthday = `${diaMesAnoNascimento[2]}, ${diaMesAnoNascimento[1]}, ${diaMesAnoNascimento[0]}`;
  const idDate = `${diaMesAnoId[2]}, ${diaMesAnoId[1]}, ${diaMesAnoId[0]}`;

  const birthdayToDate = new Date(birthday).getTime();
  const idToDate = new Date(idDate).getTime();

  const dataAtual = Date.now();
  const dataAtualToDate = new Date(dataAtual).getTime();

  const umAno = 1000 * 60 * 60 * 24 * 365;
  const idadeDate = new Date(dataAtualToDate - birthdayToDate).getTime();
  const anosId = new Date(dataAtualToDate - idToDate).getTime();

  const idadeUsuario = (idadeDate / umAno).toFixed(1) as unknown as number;
  const idadeId = (anosId / umAno).toFixed(1) as unknown as number;

  if (
    (idadeUsuario <= 20 && idadeId >= 5) ||
    (idadeUsuario > 20 && idadeUsuario <= 50 && idadeId >= 10) ||
    (idadeUsuario > 50 && idadeId >= 15)
  ) {
    return true
  } else {
      return false 
  }
}

