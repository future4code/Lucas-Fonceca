import { Request, Response } from "express";
import { app } from ".";
import { listaDeUsuarios } from "./Usuarios";

app.get("/contas/saldo", (req: Request, res: Response) => {
    const nomeUsuario = req.headers.user
    const cpfUsuario = req.headers.cpf;

    listaDeUsuarios.lista = listaDeUsuarios.lista.filter((usuario) => {
      if (usuario.nome === nomeUsuario && usuario.cpf === cpfUsuario) {
        res.status(200).send(`Olá, ${usuario.nome}. Seu saldo é ${usuario.saldo}`)
      } else if (usuario.nome !== nomeUsuario && usuario.cpf === cpfUsuario) {
        res.status(400).send(`Ops. Algo está errado.\n Nome inválido`)
      } else if (usuario.nome === nomeUsuario && usuario.cpf !== cpfUsuario) {
        res.status(400).send(`Ops. Algo está errado.\nCPF inválido`)
      } else {
        res.status(400).send(`Ops. Algo está errado.`)
      }
    })
})