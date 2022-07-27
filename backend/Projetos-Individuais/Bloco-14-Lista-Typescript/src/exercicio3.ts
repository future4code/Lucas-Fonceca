enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

export type Filmes = {
    nomeDoFilme: string;
    anoDeLancamento: number;
    genero: GENERO;
    pontuacaoEmSites?: number
}

const modelFilmes = (
  nomeDoFilme: string,
  anoDeLancamento: number,
  genero: GENERO,
  pontuacaoEmSites?: number
): Filmes => {
  const filme: Filmes = {
    nomeDoFilme,
    anoDeLancamento,
    genero,
    pontuacaoEmSites,
  };
  return filme
};
