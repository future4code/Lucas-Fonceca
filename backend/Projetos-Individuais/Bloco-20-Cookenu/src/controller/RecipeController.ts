import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/recipe";

export class RecipeController {
  public createRecipe = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      const creationDate = new Date().toISOString().split("T")[0];

      const input: RecipeInputDTO = {
        title,
        description,
        creationDate,
      };

      const recipeBusiness = new RecipeBusiness();
      const token = await recipeBusiness.create(input);
      res.status(201).send({ message: "Receita criada!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getRecipeById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const recipeBusiness = new RecipeBusiness();

      const id = req.params.id;

      const recipe = await recipeBusiness.getRecipeById(token, id);
      res.status(200).send(recipe);
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  };
}
