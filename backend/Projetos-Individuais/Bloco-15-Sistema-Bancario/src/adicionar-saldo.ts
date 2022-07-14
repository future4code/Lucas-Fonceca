import { Request, Response } from "express";
import { app } from ".";
import { listaDeUsuarios } from "./Usuarios";

app.put("/contas", (req: Request, res: Response) => {
  const cpf = req.headers.cpf;
  const deposito = req.body.deposito;

  let novoSaldo = listaDeUsuarios.lista.filter((usuario) => {
    if (cpf === usuario.cpf) {
      usuario.saldo + deposito;

      res.status(200).send(`Depósito efetuado com sucesso. Seu novo saldo é: ${novoSaldo}`);
    } else {
        res.status(400).send("CPF Inválido")
    }
  });
});
