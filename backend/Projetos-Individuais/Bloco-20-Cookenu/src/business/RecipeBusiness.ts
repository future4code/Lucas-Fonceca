import { RecipesDatabase } from "../data/RecipesDatabase";
import {
  CustomError,
  InvalidDescription,
  InvalidTitle,
} from "../error/customError";
import { recipe, RecipeInputDTO } from "../model/recipe";
import { IdGenerator } from "../services/generateId";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const recipeDatabase = new RecipesDatabase();

export class RecipeBusiness {
  public create = async (input: RecipeInputDTO) => {
    try {
      const { title, description } = input;

      if (!title) {
        throw new InvalidTitle();
      }

      if (!description) {
        throw new InvalidDescription();
      }
      const id: string = idGenerator.generateId();
      const creationDate: string = new Date().toISOString().split("T")[0];
      const recipeDatabase = new RecipesDatabase();
      const recipe: recipe = {
        id,
        title,
        description,
        creationDate,
      };
      await recipeDatabase.create(recipe);
      const token = tokenGenerator.generateToken(id);

      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getRecipeById = async (token: string, id: string): Promise<any[]> => {
    try {
      if (!token) {
        throw new CustomError(
          400,
          "Passe o token da receita através do header da requisição"
        );
      }
      const recipe = recipeDatabase.findRecipe(id);
      return recipe;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
