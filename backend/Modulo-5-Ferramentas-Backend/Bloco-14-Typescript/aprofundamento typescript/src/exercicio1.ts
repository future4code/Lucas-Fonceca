// a)
const minhaString: string = "bananinha";
// Ao tentar atribuir um número o typescript apontará um erro falando que um tipo number não pode ser atribuído a uma string.

// b)
const meuNumero: number = 13;
// Para fazer com que a variável aceite mais de um tipo de valor é necessário usar o pipe | entre os dois valores. Exemplo:
const minhaVariavelComStringOuNumber: number | string = "Assim aceita números ou strings."

// c)
const meuObjeto: { nome: string, idade: number, corFavorita: string} = {
    nome: "Lucas",
    idade: 28,
    corFavorita: "vermelho"
}

type Pessoa = {
    name: string,
    idade: number,
    corFavorita: string
}

const pessoa1: Pessoa = {
    name: "Brenda",
    idade: 25,
    corFavorita: "preto"
}

const pessoa2: Pessoa = {
    name: "Iris",
    idade: 29,
    corFavorita: "roxo"
}

const pessoa3: Pessoa = {
    name: "Hilário",
    idade: 59,
    corFavorita: "todas"
}

// d)
enum CoresDoArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type PessoaCorArcoIris = {
    name: string,
    idade: number,
    corFavorita: CoresDoArcoIris
}

