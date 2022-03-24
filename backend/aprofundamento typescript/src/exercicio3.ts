//a

type posts = {
    autor: string,
    texto: string
}

const post1: posts = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
}

const post2: posts = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

const post3: posts = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}

const post4: posts = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}

const post5: posts = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

// b) entradas: 2 strings; saída: boolean

// function buscarPostsPorAutor(posts: Array<string>, autorInformado: string) : Array <string> {
//     return posts.filter (
//         (post) => {
//             return post.autor === autorInformado
//         }
//     )
// }

