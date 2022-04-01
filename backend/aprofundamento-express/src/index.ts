import express, { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { AddressInfo } from "net";
import { afazeres } from "./tarefas";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// // Exercício 1

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong");
});

// // Exercício 4

app.get("/lista-tarefas/false", (req: Request, res: Response) => {
  const tarefasEmAndamento = afazeres.lista.filter(
    (tarefa) => tarefa.completed === false
  );

  res.send(tarefasEmAndamento);
});

app.get("/lista-tarefas/true", (req: Request, res: Response) => {
  const tarefasCompletas = afazeres.lista.filter(
    (tarefa) => tarefa.completed === true
  );

  res.send(tarefasCompletas);
});

// // Exercício 5

app.post("/lista-tarefas", (req: Request, res: Response) => {
  const userName = req.headers.authorization;

  const tarefaName = req.body.title;
  if (!tarefaName) {
    res.status(400).send("Favor informar nome da tarefa no body.");
    return;
  }
  const novaTarefa = {
    userId: userName,
    id: generateId(),
    title: tarefaName,
    completed: false,
  };

  res.status(201).send([...afazeres.lista, novaTarefa]);
  // });

  // // Exercício 7

  app.delete("/lista-tarefas", (req: Request, res: Response) => {
    const idTarefa = req.headers.id;

    afazeres.lista = afazeres.lista.filter((tarefa) => {
      if (tarefa.id === idTarefa) {
        return false;
      }
      return true;
    });
    res.status(200).send(afazeres);
  });

  // // Exercício 8

  app.get("/lista-tarefas", (req: Request, res: Response) => {
    const userId = req.headers.userId;

    afazeres.lista = afazeres.lista.filter((usuario) => {
      if (usuario.userId === userId) {
        res.status(200).send(afazeres);
      } else {
        res.status(400).send("Usuário não encontrado");
      }
    });
  });
});
