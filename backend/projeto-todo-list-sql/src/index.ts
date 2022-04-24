import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

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

app.get("/user/all", async (req: Request, res: Response): Promise<void> => {
  try {
    const userList = await connection("Users");
    res.status(200).send(userList);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.post("/user", async (req: Request, res: Response): Promise<void> => {
  const userName = req.body.name;
  const userNickName = req.body.nickname;
  const userEmail = req.body.email;

  if (!userName) {
    res.status(400).send("Favor inserir o nome do usuário!");
  }
  if (!userNickName) {
    res.status(400).send("Favor inserir o apelido do usuário!");
  }
  if (!userEmail) {
    res.status(400).send("Favor inserir o email do usuário!");
  }

  try {
    await connection("Users").insert({
      name: userName,
      nickname: userNickName,
      email: userEmail,
    });
    res.status(201).send({ message: "Usuário criado" });
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

app.put("/user/:id", async (req: Request, res: Response): Promise<void> => {
  const userName = req.body.name;
  const userNickName = req.body.nickname;
  const userEmail = req.body.email;

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

app.get("/task/all", async (req: Request, res: Response): Promise<any> => {
  try {
    const taskList = await connection("Tasks");
    res.status(200).send(taskList);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.post("/task", async (req: Request, res: Response): Promise<void> => {
  const userId = req.body.userId;
  const taskTitle = req.body.taskTitle;
  const taskDescription = req.body.taskDescription;
  const taskLimitDate = req.body.taskLimitDate.split("/").reverse().join("-");

  if (!userId) {
    res
      .status(400)
      .send("Favor inserir o id do usuário responsável pela tarefa");
  }

  if (!taskTitle) {
    res.status(400).send("Favor inserir o título da tarefa");
  }

  if (!taskDescription) {
    res.status(400).send("Favor inserir uma descrição para tarefa");
  }

  if (!taskLimitDate) {
    res
      .status(400)
      .send("Favor inserir a data limite para a execução da tarefa");
  }

  try {
    await connection("Tasks").insert({
      user_id: userId,
      title: taskTitle,
      description: taskDescription,
      limit_date: taskLimitDate,
    });
    res.status(201).send({ message: "Tarefa criada" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
    const taskId = req.params.id
  try {
    const result = await connection("Tasks").innerJoin(
      "Users",
      "Tasks.id",
      "Users.id"
    ).select('Tasks.*','Users.nickname').where({"Tasks.id": taskId});
    
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.delete("/user/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Users").delete().where({ id: req.params.id });

    res.status(200).send({ message: "Usuário deletado com sucesso" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.delete("/task/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Tasks").delete().where({ id: req.params.id });

    res.status(200).send({ message: "Tarefa deletada com sucesso" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});
