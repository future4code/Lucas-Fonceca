import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { listaDeUsuarios } from "./Usuarios";

export const app: Express = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/contas", (req: Request, res: Response) => {
  res.send(listaDeUsuarios);
});

app.post("/contas/criar-conta", (req: Request, res: Response) => {
  const nomeUsuario = req.body.nome;
  const cpfUsuario = req.body.cpf;
  const dataDeNascimentoUsuario = req.body.dataDeNascimento;

  const stringDataNascimento: string[] = dataDeNascimentoUsuario.split("/");

  const birthday = `${stringDataNascimento[2]}, ${stringDataNascimento[1]}, ${stringDataNascimento[0]}`;

  const birthdayToDate = new Date(birthday).getTime();
  const dataAtual = Date.now();
  const dataAtualToDate = new Date(dataAtual).getTime();

  const umAno = 1000 * 60 * 60 * 24 * 365;
  const idadeDate = new Date(dataAtualToDate - birthdayToDate).getTime();

  const idadeUsuario: number = (idadeDate / umAno).toFixed(
    1
  ) as unknown as number;

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
  };

  console.log(idadeUsuario);

  res.status(201).send([...listaDeUsuarios.lista, novaConta]);
});

app.get("/contas/saldo", (req: Request, res: Response) => {
  const nomeUsuario = req.headers.user;
  const cpfUsuario = req.headers.cpf;

  listaDeUsuarios.lista = listaDeUsuarios.lista.filter((usuario) => {
    if (usuario.nome === nomeUsuario && usuario.cpf === cpfUsuario) {
      res
        .status(200)
        .send(`Olá, ${usuario.nome}. Seu saldo é ${usuario.saldo}`);
    } else if (usuario.nome !== nomeUsuario && usuario.cpf === cpfUsuario) {
      res.status(400).send(`Ops. Algo está errado.\n Nome inválido`);
    } else if (usuario.nome === nomeUsuario && usuario.cpf !== cpfUsuario) {
      res.status(400).send(`Ops. Algo está errado.\nCPF inválido`);
    } else {
      res.status(400).send(`Ops. Algo está errado.`);
    }
  });
});


app.put("/contas/deposito", (req: Request, res: Response) => {
  const cpf = req.headers.cpf;
  const deposito: number = req.body.deposito;
  let novoSaldo: number

  listaDeUsuarios.lista = listaDeUsuarios.lista.filter((usuario) => {
    if (cpf === usuario.cpf) {
      novoSaldo = usuario.saldo + deposito;

      res
        .status(200)
        .send(`Depósito efetuado com sucesso. Seu novo saldo é: ${novoSaldo}`);
    } else {
      res.status(400).send("CPF Inválido");
    }
  });
});
