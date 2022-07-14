// EXERCÍCIO 2

const tipoOperacaoMatematica = process.argv[2]
const primeiroNumero = process.argv[3]
const segundoNumero = process.argv[4]

if (process.argv[2] === "adição") {
    console.log(Number(process.argv[3]) + Number(process.argv[4]))
} else if (process.argv[2] === "subtração") {
    console.log(Number(process.argv[3]) - Number(process.argv[4]))
} else if (process.argv[2] === "multiplicação") {
    console.log(Number(process.argv[3]) * Number(process.argv[4]))
} else if (process.argv[2] === "divisão") {
    console.log(Number(process.argv[3]) / Number(process.argv[4]))
} else {
    console.log (`Digite "adição", "subtração", "multiplicação" ou "divisão", e em seguida digite 2 números`)
}
