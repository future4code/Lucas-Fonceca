// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) Entradas: numeros (array de números); Saídas: estatisticas (objeto) 

function obterEstatisticas(numeros: Array<number>) {
    const numerosOrdenados: Array<number> = numeros.sort(
        (a , b) => a- b
    )

    let soma: number = 0;
    let num: number = 0;

    for (num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b) soma; num; maior; menor e media. Todos são "number"
// c)

// type amostra = {
//         numeros: Array<number>,
//         obterEstatisticas: function 
// }
