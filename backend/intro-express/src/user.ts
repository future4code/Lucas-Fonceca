// Exercício 2:

export type Users = {
  id: string;
  name: string;
  phone: string;
  email: string;
  website: string;
  posts: Posts[];
};

// Exercício 3:
export const listaDeUsuarios: Users[] = [
  {
    id: "13",
    name: "Luís",
    phone: "99999 2022",
    email: "luis@email.com",
    website: "www.luisinacio.surge.sh",
    posts: [
      {
        id: 1,
        title: "bananinha",
        body: "banana",
        userId: "13",
      },
      {
        id: 2,
        title: "batatinha quando nasce",
        body: "espalha a rama pelo chão",
        userId: "13",
      },
      {
        id: 3,
        title: "podem aprisionar uma pessoa",
        body: "mas jamais aprisionarão nossos sonhos",
        userId: "13",
      }
    ]
  },
  {
    id: "40",
    name: "Geraldo",
    phone: "2022 9999",
    email: "geraldo@email.com",
    website: "www.geraldochuchu.surge.sh",
    posts: [
      {
        id: 1,
        title: "bananinha",
        body: "banana",
        userId: "40",
      },
    ],
  },
  {
    id: "50",
    name: "Guilherme",
    phone: "2022 5013",
    email: "guilhermepaesebolos@email.com",
    website: "www.guilhermepaesebolos.surge.sh",
    posts: [
      {
        id: 1,
        title: "bananinha",
        body: "banana",
        userId: "50",
      },
    ],
  },
];

// Exercício 5:
export type Posts = {
  id: number;
  title: string;
  body: string;
  userId: Users["id"];
};

// Exercício 6: Acredito que o melhor seja criar o tipo fora, mas o array de posts dentro do array de usuários, pois já iria atribuir a postagem ao usuário.


