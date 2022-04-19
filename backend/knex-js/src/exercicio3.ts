import { Request, Response} from 'express';
import { app } from '.';
import { getActorById, getActorsByGender } from './exercicio1';


// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  // b)
  
  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await getActorsByGender(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });