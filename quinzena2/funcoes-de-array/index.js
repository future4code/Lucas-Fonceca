/* ~~~~~~~~~~~~~ QUINZENA 2 - AULA 10 - FUNÇÃO DE ARRAYS - EXERCÍCIOS ~~~~~~~~~~~~~*/ 

/* 
#################################################################
############# EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO #############
#################################################################
EXERCÍO 1 
A) No .map, o parametro "item" vai imprimir os itens do primeiro array, o "index" vai imprimir o indíce, e o "array" eu não entendi direito.
Então eu imagino que, como o exercício não pede para especificar qual elemento do objeto vai imprimir (em "item"), ele vai imprimir cada um dos elementos do array "usuario" com o indíce ao lado, mais ou menos assim:
[
"Amanda Rangel", "Mandi", 0
"Laís Petra", "Laura" , 1
"Letícia Chijo","Chijo", 2
]

B) Diferentemente do exercício "A", nesse ele imprime apenas o elemento "nome" do array "usuarios". Então a impressão será:
[
"Amanda Rangel",
"Laís Petrta",
"Letícia Chijo"
]

C) Nesse programa, irá ocorrer a impressão de todos os usuários que não possuem o apelido "Chijo", portanto a impressão será:
[
    "Amanda Rangel", "Mandi",
    "Laís Petra", "Laura"
]
*/

/* 
###########################################################
############# EXERCÍCIOS DE ESCRITA DE CÓDIGO #############
###########################################################
EXERCÍO 1 
*/
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// A)
/*
const imprimeNomeDoguinhos = pets.map((item) => {
    return item.nome;
})

console.log(imprimeNomeDoguinhos);

// B)

 const filtraSalsichinha = pets.filter((item) => {
    return item.raca === "Salsicha";
 }
 )

 console.log (filtraSalsichinha);
 // C)


const descontoPoodle = pets.filter((item) => {
     return item.raca === "Poodle";
 })

const nomesPoodle = descontoPoodle.map((item) => {
    
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`;
})
console.log (nomesPoodle); // como separar os nomes?
*/

/*
 EXERCÍO 2
A)
*/

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// /*
//  const nomeDosProdutos = produtos.map((item) => {
//      return item.nome;
//  }
//  )

//  console.log (nomeDosProdutos);
//  */

//  // B)

//  const nomeDosProdutos = produtos.map((item) => {
//     return item.nome;
//  }
//  )
 
//  let precoDosProdutos = produtos.map((item) => {
//     return item.preco;
//  }
//  )

//  const precoComDesconto = precoDosProdutos * 0.05;