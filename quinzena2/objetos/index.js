// /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// /*
// #################################################################################
// ################################## EXERCÍCIO 1 ##################################
// #################################################################################
// */

// /*
// A)

// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h

// */
// /*
// #################################################################################
// ################################## EXERCÍCIO 2 ##################################
// #################################################################################
// */
// /*
// A)
// Juca, 3, SRD
// Juba, 3, SRD
// Jubo, 3, SRD

// B) Os três pontos antes do objeto são o "spread/espalhamento". Eles servem para "copiar" os itens do objeto "espalhados".
// */

// /*
// #################################################################################
// ################################## EXERCÍCIO 3 ##################################
// #################################################################################
// */

// /*

// A)
// false
// null, undefined ou algum erro porque altura não foi declarada.

// B) O false aparece porque a propriedade (backender) do objeto (pessoa, Caio) é um booleano. Como Caio não é um backender, o valor impresso será false.
// O "null", "undefined" ou erro aparece porque no segundo exemplo é pedido para imprimir a propriedade altura, que não foi declarada em momento algum dentro do objeto. 
// */


// /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ EXERCÍCIOS DE ESCRITA DE CÓDIGO ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// /*
// #################################################################################
// ################################## EXERCÍCIO 1 ##################################
// #################################################################################
// */

// /*A*/

// const pessoa1 = {
//     nome: "Pedro",
//     apelidos: ["Pedroca", "Pedrin", "Pedro Bala"]
// }

// const pessoa2 = {
//     nome: "Givanildo",
//     apelidos: ["Hulk", "Giva", "Paraíba"]
// }


// function imprimeMensagemPessoa(objeto){
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
// }

// imprimeMensagemPessoa(pessoa1)
// imprimeMensagemPessoa(pessoa2)

// /*B*/

// const novosApelidosParaPessoa1 = {
//     ...pessoa1,
//     apelidos: ["Pedrão", "Pe", "Pedri"]
// }

// imprimeMensagemPessoa(novosApelidosParaPessoa);


// /*
// #################################################################################
// ################################## EXERCÍCIO 2 ##################################
// #################################################################################
// */

// /* A */ 
// const informacoesPessoa1 = {
//     nome: ("Lucas"),
//     idade: ("28"),
//     profissao: ("Professor")
// }

// const informacoesPessoa2 = {
//     ...informacoesPessoa1,
//     nome: ("Cristiane"),
//     idade: ("23"),
//     profissao: ("Professora")
// }

// /* B */
// const recebeInformacoesUsuario = (informacoesPessoa1, informacoesPessoa2) => {
    
//     const nomePessoa1 = informacoesPessoa1.nome;
//     const tamanhoNome1 = informacoesPessoa1.nome.length;
//     const nomePessoa2 = informacoesPessoa2.nome;
//     const tamanhoNome2 = informacoesPessoa2.nome.length;
//     const idadePessoa1 = informacoesPessoa1.idade;
//     const idadePessoa2 = informacoesPessoa2.idade;
//     const profissaoPessoa1 = informacoesPessoa1.profissao;
//     const profissaoPessoa2 = informacoesPessoa2.profissao;

//     const transformaEmArray = [];

//     transformaEmArray.push(nomePessoa1 , tamanhoNome1,  idadePessoa1 ,  profissaoPessoa1 ,  nomePessoa2 ,  tamanhoNome2 ,  idadePessoa2 ,  profissaoPessoa2);

//     console.log(transformaEmArray);
// }


// recebeInformacoesUsuario(informacoesPessoa1 , informacoesPessoa2)

// /*
// #################################################################################
// ################################## EXERCÍCIO 3 ##################################
// #################################################################################
// */

// const carrinho = [];

// const primeiraFruta = {
//     nome: ("banana"),
//     disponibilidade: true
// }

// const segundaFruta = {
//     nome: ("abacate"),
//     disponibilidade: true
// }

// const terceiraFruta = {
//     nome: ("maçã"),
//     disponibilidade: true
// }

// const recebeFrutas = (primeiraFruta, segundaFruta, terceiraFruta) => {
//     carrinho.push (primeiraFruta, segundaFruta, terceiraFruta);
//     console.log (carrinho);
// }

// recebeFrutas(primeiraFruta, segundaFruta, terceiraFruta);

// /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ DESAFIO ~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// /*
// #################################################################################
// ################################## EXERCÍCIO 2 ##################################
// #################################################################################
// */

// const recebeDadosUsuario = (dados) => {   
//     const dadosUsuario = {
//         nome: prompt('Digite seu nome'),
//         idade: prompt('Digite sua idade'),
//         profissao: prompt('Digite sua profissão')
//     }
//     console.log(dadosUsuario)
//     console.log(typeof dadosUsuario)
// }

// recebeDadosUsuario();

// /*
// #################################################################################
// ################################## EXERCÍCIO 2 ##################################
// #################################################################################
// */

// const comparaAnoDeLancamentoDeFilmes = (filmeUm, filmeDois) => {
//     const primeiroFilme = {
//         nome: ("Mr. Nobody"),
//         anoDeLancamento: 2009
//     }

//     const segundoFilme = {
//         nome: ("Chamas da Vingança"),
//         anoDeLancamento: 2004
//     }

//     const compararLancamentoMaisAntigo = primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento;
//     const compararLancamentoMesmoAno = primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento;

//     console.log(`O primeiro filme foi lançado antes do segundo? ${compararLancamentoMaisAntigo}`);
//     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${compararLancamentoMesmoAno}`);
// }

// comparaAnoDeLancamentoDeFilmes();

// /*
// #################################################################################
// ################################## EXERCÍCIO 2 ##################################
// #################################################################################
// */

// const carrinho = [];

// const primeiraFruta = {
//     nome: ("banana"),
//     disponibilidade: true
// }

// const segundaFruta = {
//     nome: ("abacate"),
//     disponibilidade: true
// }

// const terceiraFruta = {
//     nome: ("maçã"),
//     disponibilidade: true
// }

// const recebeFrutas = (primeiraFruta, segundaFruta, terceiraFruta) => {
//     carrinho.push (primeiraFruta, segundaFruta, terceiraFruta);
//     console.log (carrinho);
// }

// recebeFrutas(primeiraFruta, segundaFruta, terceiraFruta);



// const auxiliaEstoqueSacolao = (segundaFruta) => {
    
//     const novaDisponibilidade = (!segundaFruta.disponibilidade);
//     segundaFruta.disponibilidade = novaDisponibilidade;
// }

// auxiliaEstoqueSacolao(segundaFruta)