// EXERCÍCIO 1

// 1.a Através do process.argv

//1.b

const nomeUsuario = process.argv[2]
const idadeUsuario = process.argv[3]

const frase = `Exercício 1.b) Olá ${nomeUsuario}! Você tem ${idadeUsuario} anos.`

console.log(frase)

// 1.c

const novoNomeUsuario = process.argv[2]
const novaIdadeUsuario = process.argv[3]

const idadeEmSeteAnos = Number(process.argv[3])+7   

const novaFrase = `Exercício 1.c) Olá ${novoNomeUsuario}! Você tem ${novaIdadeUsuario} anos. Em sete anos você terá ${idadeEmSeteAnos}`

console.log(novaFrase)
