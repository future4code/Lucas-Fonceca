import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3306, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/user", async (req: Request, res: Response): Promise<void> => {
  const userName: string = req.body.name;
  const userNickName: string = req.body.nickname;
  const userEmail: string = req.body.email;
  const userId: string = uuidv4();

  if (userName.length > 2 && userNickName.length > 1 && userEmail.length > 3) {
    try {
      await connection("Users").insert({
        id: userId,
        name: userName,
        nickname: userNickName,
        email: userEmail,
      });

      res.status(201).send({ message: "Usuário criado" });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  } else {
    res.status(400).send("Favor conferir os dados inseridos");
  }
});

app.post("/task", async (req: Request, res: Response): Promise<void> => {
  const taskId: string = uuidv4();
  const userId: string = req.body.userId;
  const taskTitle: string = req.body.taskTitle;
  const taskDescription: string = req.body.taskDescription;
  const taskLimitDate: string = req.body.taskLimitDate
    .split("/")
    .reverse()
    .join("-");
  const taskStatus: string = req.body.taskStatus;

  if (
    taskStatus === "to_do" ||
    taskStatus === "doing" ||
    taskStatus === "done"
  ) {
    try {
      await connection("Tasks").insert({
        id: taskId,
        user_id: userId,
        title: taskTitle,
        description: taskDescription,
        limit_date: taskLimitDate,
        status: taskStatus,
      });
      res.status(201).send({ message: "Tarefa criada" });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  } else {
    res.status(400).send("Favor conferir a inserção dos dados");
  }
});

app.get("/user/all", async (req: Request, res: Response): Promise<void> => {
  try {
    const userList = await connection("Users");
    res.status(200).send(userList);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection("Users").where({ id: req.params.id });

    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/task/all", async (req: Request, res: Response): Promise<any> => {
  try {
    const taskList = await connection("Tasks");
    res.status(200).send(taskList);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
  const taskId: string = req.params.id;
  try {
    const result = await connection("Tasks")
      .innerJoin("Users", "Tasks.id", "Users.id")
      .select("Tasks.*", "Users.nickname")
      .where({ "Tasks.id": taskId });
    if (result.length === 0) {
      throw new Error("Id não foi encontrado");
    }
    let formattedDate = moment(result[0].limit_date).format("DD/MM/YYYY");
    result[0].limit_date = formattedDate;

    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/task", async (req: Request, res: Response): Promise<void> => {
  const creatorUserId: string = req.query.creatorUserId as string;
  try {
    const result = await connection("Tasks")
      .innerJoin("Users", "Tasks.user_id", "Users.id")
      .select("Tasks.*", "Users.nickname")
      .where({ "Tasks.user_id": creatorUserId });
    if (result.length === 0) {
      throw new Error(`O usuário ainda não criou tarefas`);
    }
    let formattedDate = moment(result[0].limit_date).format("DD/MM/YYYY");
    result[0].limit_date = formattedDate;

    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/user", async (req: Request, res: Response): Promise<void> => {
  const userName: string = req.query.user as string;
  const givenUser: string = userName
  // .toLocaleLowerCase()
  try {
    const result = await connection("Users")
      .innerJoin("Users", "Tasks.user_id", "Users.id")
      .select("Tasks.*", "Users.nickname")
      .whereLike("Users.name", `%${givenUser}%`).orWhereLike("Users.email", `%${givenUser}%`);

    let formattedDate = moment(result[0].limit_date).format("DD/MM/YYYY");
    result[0].limit_date = formattedDate;

    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


app.put("/user/:id", async (req: Request, res: Response): Promise<void> => {
  const userName: string = req.body.name;
  const userNickName: string = req.body.nickname;
  const userEmail: string = req.body.email;

  if (userName === "") {
    res.status(400).send("O nome não pode ficar em branco");
  }
  if (userNickName === "") {
    res.status(400).send("O apelido não pode ficar em branco");
  }
  if (userEmail === "") {
    res.status(400).send("O email não pode ficar em branco");
  }
  try {
    await connection("Users")
      .update({
        name: userName,
        nickname: userNickName,
        email: userEmail,
      })
      .where({ id: req.params.id });
    res.status(201).send({ message: "Usuário editado com sucesso" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.delete("/user/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Users")
      .delete()
      .where({ id: Number(req.params.id) });

    res.status(200).send({ message: "Usuário deletado com sucesso" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.delete("/task/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Tasks")
      .delete()
      .where({ id: Number(req.params.id) });

    res.status(200).send({ message: "Tarefa deletada com sucesso" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});