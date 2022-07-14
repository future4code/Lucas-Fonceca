import express, { Request, response, Response } from "express";
import cors from "cors";
import { listaDeUsuarios } from "./user";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("servidor ta on");
});

//Exercício 1
app.get("/", (req: Request, res: Response) => {
  console.log("servidor ta on");

  res.send("Por enquanto tudo certo");
});

// Exercícios 2, 3, 5 e 6 estão no arquivo user.ts

// Exercício 4

app.get("/users", (req: Request, res: Response) => {
    const usuarios = listaDeUsuarios.map((usuario) => usuario);

    res.send(usuarios)
});


// Exercício 7

app.get("/posts", (req: Request, res: Response) => {
    const userId = req.query.id

    if (!userId) {
        res.status(400).send("É necessário informar o id do usuário")
    }

    const usuarios = listaDeUsuarios.map((usuario) => usuario);

    let usuariosPosts
    usuarios.forEach(posts => {
        if (posts.id === userId) {
            usuariosPosts = posts.posts
        }
    })

    res.send(usuariosPosts)
})