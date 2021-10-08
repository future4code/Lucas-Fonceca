const nomeDoJogador = prompt(`Desejamos boas vindas ao jogo de BlackJack.
Antes de iniciar, digite seu nome:`);

const querJogar = confirm(`Olá, ${nomeDoJogador}. Quer iniciar uma nova rodada?`
);

if (querJogar === true) {
	let cartasUsuario = [];
	let cartasComputador = [];

	let doisAses = true;

	const montaStringDeCartas = (comecoDaString, arrayDeCartas, fimDaString) => {
		let stringDeCartas = comecoDaString;
		for (let index = 0; index < arrayDeCartas.length; index++) {
			if (index === arrayDeCartas.length - 2) {
				stringDeCartas += arrayDeCartas[index].texto + "e ";
			} else if (index === arrayDeCartas.length - 1) {
				stringDeCartas += arrayDeCartas[index].texto + ".";
			} else {
				stringDeCartas += arrayDeCartas[index].texto + ", ";
			}
		}
		return stringDeCartas + fimDaString
	}

	while (doisAses) {
		cartasUsuario.push(comprarCarta());
		cartasUsuario.push(comprarCarta());

		cartasComputador.push(comprarCarta());
		cartasComputador.push(comprarCarta());

		doisAses =
			(cartasUsuario[0].texto.includes("A") &&
			cartasUsuario[1].texto.includes("A")) ||
			(cartasComputador[0].texto.includes("A") &&
			cartasComputador[1].texto.includes("A"));

		if (doisAses) {
			cartasUsuario = [];
			cartasComputador = [];
		}
	}

	let somaComprarCartaUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor;
	let somaComprarCartaComputador =cartasComputador[0].valor + cartasComputador[1].valor;

	let usuarioQuerMaisCarta;

	if (somaComprarCartaUsuario < 21) {
		usuarioQuerMaisCarta = confirm(`Suas cartas são ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}. \n A carta revelada do computador é ${cartasComputador[0].texto}
Deseja comprar mais uma carta?`);
	}

	while (usuarioQuerMaisCarta === true && somaComprarCartaUsuario < 21) {
		cartasUsuario.push(comprarCarta());
		somaComprarCartaUsuario += cartasUsuario[cartasUsuario.length - 1].valor;


		usuarioQuerMaisCarta = confirm(montaStringDeCartas(`Suas cartas são `, 
		cartasUsuario, 
		`\n A carta revelada do computador é ${cartasComputador[0].texto} \n Deseja comprar mais uma carta?`));
	}

	while (somaComprarCartaComputador <= somaComprarCartaUsuario) {
		cartasComputador.push(comprarCarta());
		somaComprarCartaComputador += cartasComputador[cartasComputador.length - 1].valor;
	}

	let informacoesCartasComputador = montaStringDeCartas(`Computador - Cartas: `, cartasComputador, ` - Pontuação: ${somaComprarCartaComputador}`);
	
	if (somaComprarCartaUsuario === 21 || somaComprarCartaUsuario !== 21 && somaComprarCartaUsuario < 21 && somaComprarCartaComputador > 21) {
		alert(
			montaStringDeCartas(`${nomeDoJogador} - Cartas: `, 
				cartasUsuario, 
				` - Pontuação: ${somaComprarCartaUsuario}. \n${informacoesCartasComputador}\nQue sorte é essa, hein ${nomeDoJogador}? VOCÊ GANHOU!!! Que tal ir para Vegas?`));
	}  else if (somaComprarCartaComputador === 21 || somaComprarCartaUsuario !== 21 && somaComprarCartaUsuario > 21 && somaComprarCartaComputador < 21){
		alert(
			montaStringDeCartas(`${nomeDoJogador} - Cartas: `,
				cartasUsuario, 
				` - Pontuação: ${somaComprarCartaUsuario}. \n${informacoesCartasComputador}\nVocê perdeu, ${nomeDoJogador}. Mais sorte da próxima vez`));
	} else {
		alert(
			montaStringDeCartas(`${nomeDoJogador} - Cartas: `,
				cartasUsuario,
				` - Pontuação: ${somaComprarCartaUsuario}. \n${informacoesCartasComputador}\nIh, empatou... Vamos tentar de novo?`));
	}
} else {
	alert("O jogo acabou!");
}
