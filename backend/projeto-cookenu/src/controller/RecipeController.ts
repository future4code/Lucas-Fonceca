import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/recipe";

export class RecipeController {
  public createRecipe = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      const creationDate = Date.now();

      const input: RecipeInputDTO = {
        title,
        description,
        creationDate,
      };

      const recipeBusiness = new RecipeBusiness();
      await recipeBusiness.create(input);
      res.status(201).send({ message: "Receita criada!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
