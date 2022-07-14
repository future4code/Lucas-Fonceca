import { Request, Response} from 'express';
import { app } from '.';
import { deleteActorById, updateSalary } from './exercicio2';

// A)

app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  // B)

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActorById(req.params.id);
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });