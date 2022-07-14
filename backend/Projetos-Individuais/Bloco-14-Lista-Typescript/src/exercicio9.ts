function quantidadeAnagramas(palavra: string): number {
  const palavraAnagrama = palavra.split('');
  let numeroAnagramas = palavraAnagrama.length;

  for (let i = 1; i < palavraAnagrama.length; i++) {
    numeroAnagramas *= i;
  }
  
  return numeroAnagramas;
}

console.log(quantidadeAnagramas("hoje"));
