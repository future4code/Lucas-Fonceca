const nomeDoJogador = prompt(`Desejamos boas vindas ao jogo de BlackJack.
Antes de iniciar, digite seu nome:`);

const querJogar = confirm(`Olá, ${nomeDoJogador}. Quer iniciar uma nova rodada?`);

if (querJogar === true) {
   let primeiraCartaUsuario = comprarCarta();
   let segundaCartaUsuario = comprarCarta(); 
   
   let primeiraCartaComputador = comprarCarta(); 
   let segundaCartaComputador = comprarCarta(); 
   
   let somaComprarCartaUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
   let somaComprarCartaComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor;
   
   if (somaComprarCartaUsuario < somaComprarCartaComputador) {
      console.log(`Suas cartas são ${primeiraCartaUsuario.texto} e ${segundaCartaUsuario.texto} e até o momento somam ${somaComprarCartaUsuario}.
   As cartas do computador são ${primeiraCartaComputador.texto} e ${segundaCartaComputador.texto}, somando ${somaComprarCartaComputador}.
   Você perdeu, ${nomeDoJogador}. Mais sorte da próxima vez`);
   } else if (somaComprarCartaComputador < somaComprarCartaUsuario) {
      console.log (`Suas cartas são ${primeiraCartaUsuario.texto} e ${segundaCartaUsuario.texto} e até o momento somam ${somaComprarCartaUsuario}.
   As cartas do computador são ${primeiraCartaComputador.texto} e ${segundaCartaComputador.texto}, somando ${somaComprarCartaComputador}.
   Que sorte é essa, hein ${nomeDoJogador}? Você ganhou! Que tal ir para Vegas?`);
   }  else {
      console.log (`Suas cartas são ${primeiraCartaUsuario.texto} e ${segundaCartaUsuario.texto} e até o momento somam ${somaComprarCartaUsuario}.
      As cartas do computador são ${primeiraCartaComputador.texto} e ${segundaCartaComputador.texto}, somando ${somaComprarCartaComputador}
      Ih, empatou... Vamos tentar de novo?`);
   } 
} else {
   console.log(`O jogo acabou!`);
}