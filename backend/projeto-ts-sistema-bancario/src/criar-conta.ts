import { Request, Response } from "express";
import { app } from ".";
import { listaDeUsuarios } from "./Usuarios";


app.post("contas/criar-conta", (req: Request, res: Response) => {
  const nomeUsuario = req.body.name;
  const cpfUsuario = req.body.cpf;
  const dataDeNascimentoUsuario = req.body.dataDeNascimento;

  const stringDataNascimento: string[] = dataDeNascimentoUsuario.split();

  const birthday = `${stringDataNascimento[2]}, ${stringDataNascimento[1]}, ${stringDataNascimento[0]}`;

  const birthdayToDate = new Date(birthday).getTime();
  const dataAtual = Date.now();
  const dataAtualToDate = new Date(dataAtual).getTime();

  const umAno = 1000 * 60 * 60 * 24 * 365;
  const idadeDate = new Date(dataAtualToDate - birthdayToDate).getTime();

  const idadeUsuario = (idadeDate / umAno).toFixed(1) as unknown as number;

  const usuarioMaiorDeIdade = idadeUsuario >= 18;

  if (!usuarioMaiorDeIdade) {
    res
      .status(400)
      .send(
        "Você precisa ter mais de 18 anos para usufruir dos nossos serviços"
      );
  }

  const novaConta = {
    nome: nomeUsuario,
    cpf: cpfUsuario,
    dataDeNascimento: dataDeNascimentoUsuario,
    saldo: 0
  };

  res.status(201).send([...listaDeUsuarios.lista, novaConta]);
});
