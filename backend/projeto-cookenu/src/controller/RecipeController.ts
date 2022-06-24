import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/recipe";

export class RecipeController {
  public createRecipe = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      const creationDate = new Date().toISOString().split('T')[0];

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

  async getAllRecipes(req: Request, res: Response): Promise<void> {
    try {
      const recipeBusiness = new RecipeBusiness();
      const recipes = await recipeBusiness.getAllRecipes();

      res.status(400).send(recipes);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
