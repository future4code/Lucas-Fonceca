// Exercício 2

export type ToDo = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

// Exercício 3

export const afazeres: { lista: ToDo[] } = {
  lista: [
    {
      userId: "13",
      id: "1",
      title: "assistir Fleabag com a Brenda",
      completed: true,
    },
    {
      userId: "13",
      id: "2",
      title: "tirar o cinzeiro da serie b",
      completed: true,
    },
    {
      userId: "13",
      id: "3",
      title: "levar a Brenda na rodoviária",
      completed: true,
    },
    {
      userId: "13",
      id: "4",
      title: "fazer uma lista de tarefas",
      completed: false,
    },
    {
      userId: "28",
      id: "5",
      title: "lavar a louça",
      completed: false,
    },
  ],
};
