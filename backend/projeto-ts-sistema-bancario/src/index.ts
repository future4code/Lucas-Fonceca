import express, { Express, Request, response, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { listaDeUsuarios } from "./Usuarios";

export const app: Express = express();

app.use(express.json());

const Errors: { [chave: string]: { status: number; message: string } } = {
  AUTHORIZATION_NOT_FOUND: {
    status: 401,
    message: "Favor enviar header authorization",
  },
  NOT_ENOUGHT_AGE: {
    status: 401,
    message:
      "Você precisa ter mais de 18 anos para usufruir dos nossos serviços",
  },
  INVALID_NAME: {
    status: 401,
    message: "Ops. Algo está errado.\n Nome inválido",
  },
  INVALID_CPF: {
    status: 401,
    message: "Ops. Algo está errado.\n CPF inválido",
  },
  MISSING_PARAMETERS: {
    status: 422,
    message: "Alguma informação está faltando. Consulte a documentação.",
  },
  SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
};

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
  try {
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
      throw new Error(Errors.NOT_ENOUGHT_AGE.message);
    }

    const novaConta = {
      nome: nomeUsuario,
      cpf: cpfUsuario,
      dataDeNascimento: dataDeNascimentoUsuario,
    };

    res.status(201).send([...listaDeUsuarios.lista, novaConta]);
  } catch (error: any) {
    switch (error.message) {
      case Errors.NOT_ENOUGHT_AGE.message:
        res
          .status(Errors.NOT_ENOUGHT_AGE.status)
          .send(Errors.NOT_ENOUGHT_AGE.message);
        break;
      default:
        res
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG);
        break;
    }
  }
});

app.get("/contas/saldo", (req: Request, res: Response) => {
  try {
    const nomeUsuario = req.query.user;
    const cpfUsuario = req.query.cpf;

    listaDeUsuarios.lista = listaDeUsuarios.lista.filter((usuario) => {
      if (usuario.nome === nomeUsuario && usuario.cpf === cpfUsuario) {
        res
          .status(200)
          .send(`Olá, ${usuario.nome}. Seu saldo é ${usuario.saldo}`);
      } else if (usuario.nome !== nomeUsuario && usuario.cpf === cpfUsuario) {
        throw new Error(Errors.INVALID_NAME.message);
      } else if (usuario.nome === nomeUsuario && usuario.cpf !== cpfUsuario) {
        throw new Error(Errors.INVALID_CPF.message);
      }
    });
  } catch (error: any) {
    switch (error.message) {
      case Errors.INVALID_NAME.message:
        res
          .status(Errors.INVALID_NAME.status)
          .send(Errors.INVALID_NAME.message);
        break;
      case Errors.INVALID_CPF.message:
        res.status(Errors.INVALID_CPF.status).send(Errors.INVALID_CPF.message);
      default:
        res
          .status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message);
        break;
    }
  }
});

app.put("/contas/deposito", (req: Request, res: Response) => {
  try {
    const cpf = req.headers.cpf;
    const deposito: number = req.body.deposito;
    let novoSaldo: number;

    listaDeUsuarios.lista = listaDeUsuarios.lista.filter((usuario) => {
      if (cpf === usuario.cpf) {
        novoSaldo = usuario.saldo + deposito;

        res
          .status(200)
          .send(
            `Depósito efetuado com sucesso. Seu novo saldo é: ${novoSaldo}`
          );
      } else {
        throw new Error(Errors.INVALID_CPF.message);
      }
    });
  } catch (error: any) {
    switch (error.message) {
      case Errors.INVALID_CPF.message:
        res.status(Errors.INVALID_CPF.status).send(Errors.INVALID_CPF.message);
        break;
      default:
        res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        break;
    }
  }
});
