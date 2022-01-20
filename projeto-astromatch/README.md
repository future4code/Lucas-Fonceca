# Txainder
## - Sobre o projeto:
_Projeto realizado para o Módulo 4 (React Avançado e Hooks) do curso FullStack da Labenu_

Este projeto foi realizado como exercício de fixação do Módulo 4 do curso da Labenu, baseado no projeto Astro Match. Tem como objetivo a fixação de componentes funcionais em React, como useState e useEffect, bem como o auxílio de bibliotecas de Design System. Para este projeto em específico foi utilizada a biblioteca [Chakra UI](https://chakra-ui.com).

## - Funcionalidades

O Txainder se baseia em um aplicativo/site de encontros, por conta disso ao abrir o site, o usuário se depara com cards que apresentam uma imagem, nome e idade de uma pessoa. Na base da tela aparecem dois botões:
 - Um com um "x" vermelho, que indica que o usuário não tem interesse naquela pessoa;
 - Outro com um coração verde, que indica que o usuário tem interesse naquela pessoa;
 
Além disso, no topo da página inicial, no canto superior direito, há um terceiro botão, este roxo com um balão de fala e um coração, que direciona o usuário para a tela de matches.
Ao passar o mouse por cima dos botões, aparece um indicativo da função dos botões.

## - Os Botões
Ao clicar sobre o coração verde, o sistema decide se aquela pessoa também tem interesse no usuário ou não. Em caso positivo, aparece um _pop-up_ para o usuário com a frase "deu match", e as informações do "match" vão para a tela de matches. Uma vez que as pessoas do projeto são personagens e/ou pessoas públicas fornecidas pela API do AstroMatch (e não são de fato usuários do site), essa escolha de quem dá match ou não é feita de forma aleatória. 

## - A Tela de Matches
Na tela de matches o usuário se depara com novas informações:
  - Outros dois botões;
  - A lista de pessoas que deram match com ele;
 
 ### - Os botões da tela de Match
 Na parte superior da tela existem dois novos botões:
  - Uma lixeira vermelha;
  - A silhueta de duas pessoas, em roxo;
 
 A lixeira tem a função de resetar os matches e apresentar novamente todas as pessoas do aplicativo na tela inicial, e o segundo botão, roxo, tem como função retornar para a tela inicial e voltar a ver os perfis das demais pessoas. Tal qual a tela inicial, o usuário tem essas informações ao passar o mouse por cima do botão.
 
 ### - Lista de matches
 Por fim, abaixo dos botões aparece uma lista de pessoas, que são os perfis que deram match com o usuário. A lista é meramente ilustrativa, portanto não existe a opção de abrir uma tela de conversa com os matches.
 
 Agora que você já sabe como o Txainder funciona, que tal [testar a aplicação](https://txainder.surge.sh)? 
